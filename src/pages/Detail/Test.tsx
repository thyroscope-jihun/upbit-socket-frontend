// import React, { useEffect } from "react";
// import { observer } from "mobx-react-lite";
// import { useGlobalStore } from "#global-store";

// const Ticker: React.FC = observer(() => {
//   const g = useGlobalStore();
//   const presenter = g.presenters.marketDetail;
//   useEffect(() => {
//     const ws = new WebSocket("wss://api.upbit.com/websocket/v1");

//     ws.onopen = () => {
//       ws.send(
//         '[{"ticket":"UNIQUE_TICKET"},{"type":"trade","codes":["KRW-BTC"]}]'
//       );
//     };

//     ws.onmessage = (event: MessageEvent) => {
//       const ticker = JSON.parse(event.data)[0];
//       if (ticker && ticker.tp) {
//         presenter.addTickerData({
//           time: new Date().getTime(),
//           price: ticker.tp,
//         });
//       }
//     };

//     return () => {
//       ws.close();
//     };
//   }, []);

//   return (
//     <div>
//       <h2>이동평균: {presenter.movingAverage.toFixed(2)}</h2>
//     </div>
//   );
// });

// export default Ticker;

import React from "react";

const Test = () => {
  return <div></div>;
};

export default Test;
