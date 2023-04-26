import { io } from "socket.io-client";

export const createWebSocket = () => {
  const socket = io("wss://api.upbit.com/websocket/v1");
  socket.emit("send", [
    {
      type: "ticker",
      codes: ["KRW-BTC", "KRW-ETH"],
    },
    {
      type: "orderbook",
      codes: ["KRW-BTC", "KRW-ETH"],
    },
  ]);
  socket.on("message", (data) => {
    console.log("ddd", data);
  });
};
