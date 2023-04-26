import GlobalStore from "#global-store";
import { makeAutoObservable } from "mobx";

class TestStore {
  tickerData: any[] = [];

  constructor(private repo: {}, private store: GlobalStore) {
    makeAutoObservable(this);
  }

  addTickerData(data: any) {
    this.tickerData.push(data);
  }

  get movingAverage(): number {
    const windowSize = 5;
    if (this.tickerData.length >= windowSize) {
      const prices = this.tickerData
        .slice(-windowSize)
        .map((data) => data.price);
      const sum = prices.reduce((acc, price) => acc + price, 0);
      return sum / windowSize;
    } else {
      return 0;
    }
  }
}

export default TestStore;
