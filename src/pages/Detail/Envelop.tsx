import React, { useState, useEffect } from "react";
import talib from "ta-lib";
// import WebSocket from "ws";

const PERIOD = 5; // 기간
const PERCENTAGE = 5; // 상한선 및 하한선 비율
const UPPER_BOUND = 100 + PERCENTAGE;
const LOWER_BOUND = 100 - PERCENTAGE;

const Envelop: React.FC = () => {
  const [latestPrice, setLatestPrice] = useState<number>(0);
  const [currentUpperBound, setCurrentUpperBound] = useState<number>(0);
  const [currentLowerBound, setCurrentLowerBound] = useState<number>(0);

  useEffect(() => {
    const ws = new WebSocket("wss://api.upbit.com/websocket/v1");

    const message = {
      type: "ticker",
      codes: ["KRW-BTC"],
    };

    ws.onopen = () => {
      ws.send(`[{"ticket":"ticker"},{"type":"ticker","codes":["KRW-BTC"]}]`);
    };

    ws.onmessage = (event) => {
      event.data.text().then((text: any) => {
        const json = JSON.parse(text);
        console.log("ttt", json);
        if (!json.trade_price) {
          console.log("dvdvdv");
          return;
        }
        try {
          const envelopes = talib.BBANDS(
            [json.trade_price],
            PERIOD,
            PERCENTAGE / 100
          );
          const upperBound = envelopes.highband[0];
          const lowerBound = envelopes.lowband[0];

          setCurrentUpperBound(upperBound);
          setCurrentLowerBound(lowerBound);
        } catch (e) {
          console.log("error", e);
        }
      });

      // Talib 라이브러리를 사용하여 볼린저밴드(Bollinger Bands)를 계산합니다.
    };

    return () => {
      ws.close();
    };
  }, []);

  console.log("currentUpperBound", currentUpperBound);
  console.log("currentLowerBound", currentLowerBound);
  console.log("latestPrice", latestPrice);

  return (
    <div>
      <p>최근 거래 가격: {latestPrice} KRW</p>
      <p>상한선: {currentUpperBound} KRW</p>
      <p>하한선: {currentLowerBound} KRW</p>
      <p>5% 상한선: {UPPER_BOUND} KRW</p>
      <p>5% 하한선: {LOWER_BOUND} KRW</p>
    </div>
  );
};

export default Envelop;
