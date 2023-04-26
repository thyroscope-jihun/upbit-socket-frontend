import GetMarketsPresenter from "#presenters/market";
import GlobalUIPresenter from "#presenters/global-ui";
import LoginPresenter from "#presenters/login";

export default interface IPresenters {
  globalui: GlobalUIPresenter;
  login: LoginPresenter;
  markets: GetMarketsPresenter;
}
