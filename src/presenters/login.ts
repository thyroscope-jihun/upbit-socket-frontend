import GlobalStore from "#global-store";
import { makeObservable, observable, runInAction } from "mobx";
import IBeforeAuthRepository from "./interfaces/iBeforeAuthRepository";

export default class LoginPresenter {
  accessKey: string = "xPqcaIw1FyjhSSrdtNCpgT00DMpj93i58bD9t99c";
  secretKey: string = "PdaQfO7AgRL3VEbyYruxdoAAquKYftVxLC127xlz";
  constructor(
    private repo: {
      signIn: IBeforeAuthRepository;
    },
    private store: GlobalStore
  ) {
    makeObservable(this, {
      accessKey: observable,
      secretKey: observable,
    });
  }

  setAccessKey = (accessKey: string) => {
    runInAction(() => {
      this.accessKey = accessKey;
    });
  };

  setSecretKey = (secretKey: string) => {
    runInAction(() => {
      this.secretKey = secretKey;
    });
  };

  signIn = async () => {
    try {
      const jwt = await this.repo.signIn.signIn(this.accessKey, this.secretKey);
      this.store.setJwt(jwt);
    } catch (e) {
      console.log(e);
    }
  };
}
