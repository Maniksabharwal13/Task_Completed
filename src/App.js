import "./styles.css";
import React, { useEffect, useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  function start() {
    setCount(count + 1);
  }
  let id;
  function reset() {
    setCount(0);
    clearTimeout(id);
  }
  useEffect(() => {
    if (count) id = setTimeout(start, 1000);
  }, [count]);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={start}>start</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
