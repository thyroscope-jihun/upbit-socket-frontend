import GlobalStore from "#global-store";
import { makeObservable, observable, runInAction } from "mobx";
import { toast, ToastOptions } from "react-toastify";

export default class GlobalUIPresenter {
  //@headerState
  headerMenuHover: boolean = false;
  headerProfileClicked: boolean = false;
  constructor(private repo: {}, private store: GlobalStore) {
    makeObservable(this, {
      headerMenuHover: observable,
      headerProfileClicked: observable,
    });
  }
  //@@ toast UI
  showToastMessage = (
    message: string,
    options?: ToastOptions<{}>,
    state?: "success" | "error" | "default" | "warning"
  ) => {
    const defaultOptions: ToastOptions<{}> = {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      closeButton: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      ...options,
    };
    if (state === "error") {
      toast.error(message, defaultOptions);
      return;
    } else if (state === "success") {
      toast.success(message, defaultOptions);
      return;
    } else if (state === "warning") {
      toast.warn(message, defaultOptions);
      return;
    }
    toast(message, defaultOptions);
  };

  //@@ Header
  onHeaderMenuHover = (state: boolean) => {
    runInAction(() => {
      this.headerMenuHover = state;
    });
    if (state) {
      runInAction(() => {
        this.headerProfileClicked = false;
      });
    }
  };
  onHeaderProfileClicked = () => {
    runInAction(() => {
      this.headerProfileClicked = !this.headerProfileClicked;
    });
  };

  logout = () => {
    localStorage.removeItem("jwt");
    runInAction(() => {});
    this.showToastMessage("성공적으로 로그아웃 되었습니다.", {}, "success");
  };

  //@@ Aside
}
