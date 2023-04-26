import { DaysCandleDTO } from "./dto/DaysCandleDTO";

export default interface IGetDaysCandlesRepository {
  getDaysCandles(market: string, count: number): Promise<DaysCandleDTO[]>;
}
