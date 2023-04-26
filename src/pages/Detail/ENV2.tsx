import React, { useEffect, useState } from "react";
import * as math from "mathjs";
import { observer } from "mobx-react";

type CandleData = {
  opening_price: string;
  high_price: string;
  low_price: string;
  trade_price: string;
  timestamp: number;
};

type EnvelopeData = {
  timestamp: number;
  upper: number;
  lower: number;
};

const MovingAverage: React.FC = () => {
  const [candles, setCandles] = useState<CandleData[]>([]);
  const [envelopes, setEnvelopes] = useState<EnvelopeData[]>([]);

  const connectWebSocket = () => {
    const ws = new WebSocket("wss://api.upbit.com/websocket/v1");

    ws.onopen = () => {
      ws.send(`[{"ticket":"ticker"},{"type":"ticker","codes":["KRW-BTC"]}]`);
    };

    ws.onmessage = (event) => {
      event.data.text().then((text: any) => {
        try {
          const tradeData: CandleData = JSON.parse(text);

          //   const newCandles = [...candles];
          //   // candle 데이터 업데이트
          //   newCandles.push({
          //     opening_price: tradeData.opening_price,
          //     high_price: tradeData.high_price,
          //     low_price: tradeData.low_price,
          //     trade_price: tradeData.trade_price,
          //     timestamp: new Date(tradeData.timestamp).getTime(),
          //   });

          setCandles((prev) => [
            ...prev,
            {
              opening_price: tradeData.opening_price,
              high_price: tradeData.high_price,
              low_price: tradeData.low_price,
              trade_price: tradeData.trade_price,
              timestamp: new Date(tradeData.timestamp).getTime(),
            },
          ]);

          console.log("ddd", candles);

          // 이동평균선 계산
          if (candles.length >= 5) {
            console.log("진입");

            const closingPrices = candles.map((candle) =>
              Number(candle.trade_price)
            );
            const movingAverage = math.mean(closingPrices.slice(-5));
            const envelopePercentage = 0.05;

            const upperband = movingAverage * (1 + envelopePercentage);
            const lowerband = movingAverage * (1 - envelopePercentage);

            setEnvelopes((prevEnvelopes) => [
              ...prevEnvelopes,
              {
                timestamp: candles[candles.length - 1].timestamp,
                upper: upperband,
                lower: lowerband,
              },
            ]);
          }
        } catch (error) {}
      });
    };

    ws.onclose = () => {
      console.log("WebSocket is closed");
    };

    ws.onerror = (error) => {
      console.log(`WebSocket error: ${error}`);
    };
  };

  useEffect(() => {
    // connectWebSocket();
  }, []);

  return (
    <div>
      {envelopes.map((envelope, index) => {
        console.log("envelope", envelope);
        return (
          <div
          //   key={envelope.timestamp + "_" + index}
          >
            <div>{new Date(envelope.timestamp).toLocaleString()}</div>
            <div>Upper Band: {envelope.upper}</div>
            <div>Lower Band: {envelope.lower}</div>
          </div>
        );
      })}
      <div>안녕하세요</div>
    </div>
  );
};

export default observer(MovingAverage);
