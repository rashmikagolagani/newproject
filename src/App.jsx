import { useState } from "react";
import "./App.css";
export default function Counter() {
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
  let imagesrc;

  if (value < 50) {
    imagesrc =
      "https://i.pinimg.com/736x/b0/f7/f8/b0f7f8165f2dda408cde0730a2f08c23.jpg";
  } else if (value < 100) {
    imagesrc =
      "https://media.istockphoto.com/id/1388186992/vector/yellow-happy-face-vector-symbol-icon.jpg?s=612x612&w=0&k=20&c=GZBWkt0ZLxLHkxU58BhRqkk41xC0LySjXa0N65xMDlw=";
  } else {
    imagesrc =
      "https://media.istockphoto.com/id/1408363720/vector/loudly-crying-emoticon.jpg?s=612x612&w=0&k=20&c=oqmC21THjO4uB86BR58opOIkmcBE0n47Bf0QmUdMFcA=";
  }

  return (
    <div className="contanier">
      <div>
        <img className="imagestyle" src={imagesrc} alt="image" />
      </div>
      <div className="counterdata">
        <h1>{value}</h1>
      </div>
    </div>
  );
}
