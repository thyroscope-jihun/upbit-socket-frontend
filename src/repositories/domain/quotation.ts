import { DaysCandleDTO } from "#presenters/interfaces/dto/DaysCandleDTO";
import axios from "axios";

class QuotataionRepository {
  private baseUrl = import.meta.env.VITE_API_BASE_URL;
  async getMarkets() {
    const { data } = await axios.get(`${this.baseUrl}/market/all`, {
      headers: {
        Accept: "application/json",
      },
    });
    return data;
  }
  async getDaysCandles(
    market: string,
    count: number
  ): Promise<DaysCandleDTO[]> {
    const { data } = await axios.get(
      `${this.baseUrl}/candles/days?market=${market}&count=${count}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return data;
  }
}

export default QuotataionRepository;
