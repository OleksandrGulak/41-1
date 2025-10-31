import React, { Suspense } from "react";
import MessageComponent, { fetchMessage } from "./components/MessageComponent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const messagePromise = fetchMessage();

  return (
    <>
      <h1>Демонстрація use(), Suspense та ErrorBoundary</h1>

      <ErrorBoundary>
        <Suspense fallback={<p>⏳ Завантаження повідомлення...</p>}>
          <MessageComponent messagePromise={messagePromise} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
