import GlobalStore from "#global-store";
import { makeObservable, observable, runInAction } from "mobx";
import IBeforeAuthRepository from "./interfaces/iBeforeAuthRepository";

export default class LoginPresenter {
  constructor(
    private repo: {
      signIn: IBeforeAuthRepository;
    },
    private store: GlobalStore
  ) {
    makeObservable(this, {});
  }
}
