import { useState } from "react";
import "./App.css";
function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <button className="Generate" onClick={increment}>
        Generate
      </button>
      <button className="Reset" onClick={decrement}>
        Reset
      </button>
      <CountDisplay value={count} />
    </div>
  );
}
function CountDisplay({ value }) {
  return (
    <div>
      <span
        style={{
          color: "blue",
          fontSize: "64px",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
