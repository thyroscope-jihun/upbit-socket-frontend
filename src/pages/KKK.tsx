import React, { useState, useEffect } from "react";

function UpbitTicker() {
  const [tickerData, setTickerData] = useState<any>(null);

  useEffect(() => {
    const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
    ws.onopen = () => {
      ws.send('[{"ticket":"ticker"},{"type":"ticker","codes":["KRW-BTC"]}]');
    };
    ws.onmessage = (event) => {
      event.data.text().then((text: any) => {
        try {
          const data = JSON.parse(text);
          if (data.type === "ticker") {
            console.log("data", data);

            setTickerData(data);
          }
        } catch (error) {
          console.error(error);
        }
      });
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      {tickerData ? (
        <div>
          <p>BTC/KRW</p>
          <p>최종 체결가: {tickerData.trade_price}</p>
          <p>전일 대비: {tickerData.signed_change_rate}%</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UpbitTicker;
