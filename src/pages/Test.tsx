import { useState } from "react";
import { useUpbitWebSocket } from "use-upbit-api";

function Test() {
  const option = { throttle_time: 400, max_length_queue: 100 };
  const [targetMarketCodes, setTargetMarketCodes] = useState([
    {
      market: "KRW-BTC",
      korean_name: "비트코인",
      english_name: "Bitcoin",
    },
  ]);
  const { socket, isConnected, socketData } = useUpbitWebSocket(
    targetMarketCodes,
    "orderbook",
    option
  );

  console.log("sss", socketData);

  return (
    <>
      {socketData ? (
        <div>
          <div>코인 : {socketData.code}</div>
          <div>총 매도 물량 : {socketData.total_ask_size}</div>
          <div>총 매수 물량 : {socketData.total_bid_size}</div>
          <table>
            <thead>
              <tr>
                <th>매도 물량</th>
                <th>가격</th>
                <th>매수 물량</th>
              </tr>
            </thead>
            <tbody>
              {[...socketData.orderbook_units].reverse().map((ele, index) => (
                <tr key={`ask_${index}`}>
                  <th>{ele.ask_size}</th>
                  <th>{ele.ask_price}</th>
                  <th>-</th>
                </tr>
              ))}
              {[...socketData.orderbook_units].map((ele, index) => (
                <tr key={`bid_${index}`}>
                  <th>-</th>
                  <th>{ele.bid_price}</th>
                  <th>{ele.bid_size}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Orderbook Loading...</div>
      )}
    </>
  );
}

export default Test;
