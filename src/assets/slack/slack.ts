import axios from "axios";
import moment from "moment";

class Slack {
  static get Colors() {
    return {
      primary: "#007bff",
      info: "#027afa",
      success: "#28a745",
      warning: "#ffc107",
      danger: "#dc3545",
    };
  }
  static get Channels() {
    return {
      fiveAverage:
        "https://hooks.slack.com/services/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",
    };
  }
  //private function
  private static async sendmessage(message: any, channel: string) {
    if (!message) {
      console.error("메시지 포멧이 없습니다.");
      return;
    }
    const options = {
      method: "POST",
      baseURL: channel,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: JSON.stringify(message),
    };
    try {
      await axios.request(options);
    } catch (err) {
      console.log(err);
      return;
    }
  }

  static async sendEnvelop(
    market: string,
    price: number,
    envelop: number,
    color: keyof typeof Slack.Colors
  ) {
    const payload = {
      text: "*코인 정보*",
      attachments: [
        {
          color: Slack.Colors[color],
          blocks: [
            {
              type: "section",
              fields: [
                {
                  type: "mrkdwn",
                  text: `*마켓명:* ${market}`,
                },
              ],
            },
            {
              type: "section",
              fields: [
                {
                  type: "mrkdwn",
                  text: `*가격:* ${price}`,
                },
              ],
            },
            {
              type: "section",
              fields: [
                {
                  type: "mrkdwn",
                  text: `*내용:*\n 현재 코인의 가격이 5일 이동평균선 기준 ${envelop}% 입니다.`,
                },
              ],
            },
          ],
        },
      ],
    };
    await this.sendmessage(payload, this.Channels.fiveAverage);
  }
}

export default Slack;
