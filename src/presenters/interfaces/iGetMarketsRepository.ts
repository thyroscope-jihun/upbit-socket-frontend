import { MarketDTO } from "./dto/MarketDTO";

export default interface IGetMarketsRepository {
  getMarkets(): Promise<MarketDTO[]>;
}
