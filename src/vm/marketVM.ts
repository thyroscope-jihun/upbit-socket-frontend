import { getAverage } from "./../lib/utils/utils";
import GlobalStore from "#global-store";
import GetMarketsPresenter from "#presenters/market";
import { MarketDetailDTO } from "#presenters/interfaces/dto/MarketDetailDTO";
import { MarketDTO } from "#presenters/interfaces/dto/MarketDTO";
import Slack from "#assets/slack/slack";
import {
  autorun,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from "mobx";
import moment from "moment";

export default class MarketVM {
  entity: MarketDTO;
  detail: MarketDetailDTO | null = null;
  fiveDaysAverage: number = 0;
  ws: WebSocket | null = null;
  isConnected: boolean = false;
  timeStamp = moment().format("YYYYMMDDHHmmss");
  isPastNine = false;
  isWaiting = false;
  min5CheckTime = moment().add(-10, "minutes").format("YYYYMMDDHHmmss");
  min20CheckTime = moment().add(-10, "minutes").format("YYYYMMDDHHmmss");
  constructor(
    entity: MarketDTO,
    private presenter: GetMarketsPresenter,
    private store: GlobalStore
  ) {
    this.entity = entity;
    makeObservable(this, {
      entity: observable,
      detail: observable,
      fiveDaysAverage: observable,
      ws: observable,
      isConnected: observable,
      isPastNine: observable,
      isWaiting: observable,
    });

    reaction(
      () => this.detail?.trade_price,
      async () => {
        if ((this.detail?.trade_price as number) < this.getEnvelop(+0.1)) {
          if (
            moment().diff(
              moment(this.min5CheckTime, "YYYYMMDDHHmmss"),
              "minutes"
            ) < 5
          ) {
          } else {
            runInAction(() => {
              this.min5CheckTime = moment()
                .add(5, "minutes")
                .format("YYYYMMDDHHmmss");
            });
            this.sendSlack(-5);
          }
        }

        if ((this.detail?.trade_price as number) > this.getEnvelop(+0.1)) {
          if (
            moment().diff(
              moment(this.min20CheckTime, "YYYYMMDDHHmmss"),
              "minutes"
            ) < 5
          ) {
            console.log("5분이내");
          } else {
            runInAction(() => {
              this.min20CheckTime = moment()
                .add(5, "minutes")
                .format("YYYYMMDDHHmmss");
            });
            this.sendSlack(-20);
          }
        }
      }
    );

    reaction(
      () => this.isPastNine,
      async (isPastNine) => {
        if (isPastNine) {
          // 특정 액션 실행
          await this.get5DaysAverage();
        }
      }
    );
    this.runAtNine();
  }

  init = async () => {
    await this.get5DaysAverage();
    this.connentWebsocket();
  };

  runAtNine() {
    const utc9 = moment.utc().startOf("day").add(9, "hours");
    const now = moment.utc();
    if (now.isAfter(utc9)) {
      this.isPastNine = true;
    } else {
      setTimeout(() => {
        this.runAtNine();
      }, utc9.diff(now));
    }
  }

  connentWebsocket = () => {
    runInAction(() => {
      this.ws = new WebSocket("wss://api.upbit.com/websocket/v1");
    });
    if (this.ws) {
      this.ws.onopen = () => {
        runInAction(() => {
          this.isConnected = true;
        });
        this.ws?.send(
          `[{"ticket":"ticker"},{"type":"ticker","codes":["${this.entity.market}"]}]`
        );
      };
      this.ws.onmessage = (event) => {
        event.data.text().then((text: any) => {
          try {
            const data = JSON.parse(text);
            if (data.type === "ticker") {
              this.setDetail(data);
            }
          } catch (error) {
            console.error(error);
          }
        });
      };
      this.ws.onclose = () => {
        console.log("닫힘");
      };
    }
  };

  closeWebsocket = () => {
    if (this.ws) {
      this.ws.close();
      runInAction(() => {
        this.isConnected = false;
      });
    }
  };

  get5DaysAverage = async () => {
    const data = await this.store.repos.getDaysCandles.getDaysCandles(
      this.entity.market,
      5
    );
    runInAction(() => {
      this.fiveDaysAverage = getAverage(
        data.map((item) => item.prev_closing_price)
      );
    });
  };

  setDetail = (ticker: MarketDetailDTO) => {
    runInAction(() => {
      this.detail = ticker;
    });
  };

  getEnvelop = (num: number) => {
    return this.fiveDaysAverage * (1 + num / 100);
  };

  sendSlack = async (env: -5 | -20) => {
    if (env === -5) {
      await Slack.sendEnvelop(
        this.entity.market,
        this.detail?.trade_price as number,
        env,
        "warning"
      );
    } else if (env === -20) {
      await Slack.sendEnvelop(
        this.entity.market,
        this.detail?.trade_price as number,
        env,
        "danger"
      );
    }
  };

  get textColor() {
    const currentPrice = this.detail?.trade_price as number;
    const prevPrice = this.detail?.prev_closing_price as number;
    if (currentPrice > prevPrice) {
      return "red";
    } else if (currentPrice < prevPrice) {
      return "blue";
    } else {
      return "white";
    }
  }

  get dataForChart() {
    return {
      envMin5: [{ x: 2, y: this.getEnvelop(-5) }],
      envPlus5: [{ x: 2, y: this.getEnvelop(5) }],
      envMin25: [{ x: 2, y: this.getEnvelop(-25) }],
      current: [{ x: 2, y: this.detail?.trade_price as number }],
    };
  }

  get statType() {
    if ((this.detail?.signed_change_rate as number) > 0) {
      return "increase";
    } else {
      return "decrease";
    }
  }
}
