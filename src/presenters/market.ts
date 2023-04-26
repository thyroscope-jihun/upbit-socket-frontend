import GlobalStore from "#global-store";
import { makeObservable, observable, runInAction } from "mobx";
import MarketVM from "src/vm/marketVM";
import { MarketDTO } from "./interfaces/dto/MarketDTO";
import IGetMarketsRepository from "./interfaces/iGetMarketsRepository";
import IGetMinutesCandlesRepository from "./interfaces/iGetDaysCandles";

export default class MarketsPresenter {
  markets: MarketDTO[] = [];
  filterString: string = "";
  selectedMarket: MarketDTO | null = null;
  marketVMs: MarketVM[] = [];
  selectedMarketVM: MarketVM | null = null;
  notificationMarketList: MarketVM[] = [];

  constructor(
    private repo: {
      getMarkets: IGetMarketsRepository;
      getDaysCandles: IGetMinutesCandlesRepository;
    },
    private store: GlobalStore
  ) {
    makeObservable(this, {
      markets: observable,
      filterString: observable,
      selectedMarket: observable,
      marketVMs: observable,
      selectedMarketVM: observable,
      notificationMarketList: observable,
    });
  }

  onSelectMarket = async (index: number) => {
    if (
      this.selectedMarketVM?.entity.market ===
      this.marketVMs[index].entity.market
    ) {
      if (
        !this.notificationMarketList.some(
          (vm) => vm.entity.market === this.marketVMs[index].entity.market
        )
      ) {
        this.notificationMarketList.push(this.marketVMs[index]);
        this.selectedMarketVM?.connentWebsocket();
      }
      console.log("리터니");
      return;
    }
    runInAction(() => {
      this.selectedMarketVM = this.marketVMs[index];
      this.notificationMarketList.push(this.marketVMs[index]);
    });
    await this.selectedMarketVM?.init();
  };

  removeNotificationMarket = (index: number) => {
    runInAction(() => {
      this.notificationMarketList.splice(index, 1);
      this.selectedMarketVM?.closeWebsocket();
    });
  };

  onChangeFilterString = (e: React.ChangeEvent<HTMLInputElement>) => {
    runInAction(() => {
      this.filterString = e.target.value;
    });
  };

  getMarkets = async () => {
    const data = await this.repo.getMarkets.getMarkets();
    const markets = data.filter((r) => r.market.includes("KRW"));
    runInAction(() => {
      this.markets = markets;
      this.marketVMs = markets.map(
        (market) => new MarketVM(market, this, this.store)
      );
    });
  };

  get filteredMarkets() {
    return this.markets?.filter((market) =>
      market.korean_name.toLowerCase().includes(this.filterString.toLowerCase())
    );
  }
}
