import GlobalUIPresenter from "#presenters/global-ui";
import { makeObservable, observable, runInAction } from "mobx";
import repos from "#repositories";
import { createContext, useContext } from "react";
import IPresenters from "#presenters/interfaces/iPresenters";
import LoginPresenter from "#presenters/login";
import marketsPresenter from "#presenters/market";

let instance: GlobalStore | null;

class GlobalStore {
  presenters: IPresenters;
  repos = repos;
  constructor() {
    this.presenters = this.initPresenters();
    makeObservable(this, {});
  }

  private initPresenters(): IPresenters {
    const presenters: IPresenters = {
      globalui: new GlobalUIPresenter({}, this),
      login: new LoginPresenter(
        {
          signIn: repos.signIn,
        },
        this
      ),
      markets: new marketsPresenter(
        {
          getMarkets: repos.getMarkets,
          getDaysCandles: repos.getDaysCandles,
        },
        this
      ),
    };
    return presenters;
  }
}

export default GlobalStore;

const globalStore = Object.freeze(new GlobalStore());
export const GlobalStoreContext = createContext(globalStore);
export const useGlobalStore = () => useContext(GlobalStoreContext);
