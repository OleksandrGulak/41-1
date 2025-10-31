import React, { use } from "react";

function fetchMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fail = Math.random() < 0.3;
      if (fail) reject(new Error("Не вдалося отримати повідомлення 😢"));
      else resolve("Привіт із асинхронного світу React 19!");
    }, 2000);
  });
}

export default function MessageComponent({ messagePromise }) {
  const message = use(messagePromise);
  return <h2>{message}</h2>;
}

export { fetchMessage };
