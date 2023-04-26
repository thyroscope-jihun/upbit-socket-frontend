import { useGlobalStore } from "#global-store";
import { observer } from "mobx-react";
import React, { useEffect } from "react";

interface SocketProps {
  codes: string;
}

function Socket({ codes }: SocketProps) {
  const g = useGlobalStore();
  const presenter = g.presenters.marketDetail;

  useEffect(() => {
    const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
    ws.onopen = () => {
      console.log("연결");
      ws.send(`[{"ticket":"ticker"},{"type":"ticker","codes":["${codes}"]}]`);
    };
    ws.onmessage = (event) => {
      event.data.text().then((text: any) => {
        try {
          const data = JSON.parse(text);
          if (data.type === "ticker") {
            console.log("dfdfdf", data);
            presenter.setTickerData(data);
          }
        } catch (error) {
          console.error(error);
        }
      });
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // return () => {
    //   ws.close();
    // };
  }, [codes]);

  return (
    <div>
      {presenter.tickerData ? (
        <div>
          <p>{codes}</p>
          <p>최종 체결가: {presenter.tickerData.trade_price}</p>
          <p>전일 대비: {presenter.tickerData.signed_change_rate}%</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default observer(Socket);
