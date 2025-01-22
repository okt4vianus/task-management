import { useState } from "react";

export function AddButton() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    console.log(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
    console.log(count - 1);
  }

  return (
    <div>
      <button
        onClick={handleIncrement}
        className="rounded bg-blue-700 text-white"
      >
        + add
      </button>
      <span> </span>
      <button
        onClick={handleDecrease}
        className="rounded bg-red-700 text-white"
      >
        - sub
      </button>
      <p>Counter: {count}</p>
    </div>
  );
}
