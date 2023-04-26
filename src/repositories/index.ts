import SigninRepository from "./domain/auth";
import GetMarketsRepository from "./domain/quotation";
import getDaysCandlesRepository from "./domain/quotation";

const repositories = {
  signIn: new SigninRepository(),
  getMarkets: new GetMarketsRepository(),
  getDaysCandles: new getDaysCandlesRepository(),
};

export default repositories;
