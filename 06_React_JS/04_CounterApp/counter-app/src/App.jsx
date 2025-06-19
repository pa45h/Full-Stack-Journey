import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const rmvValue = () => {
    setCount(count - 1);
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={rmvValue}>{count}-1</button>
      <button onClick={resetValue}>RESET</button>
      <button onClick={addValue}>{count}+1</button>
    </>
  );
}

export default App;
