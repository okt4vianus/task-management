import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
    console.log(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
    console.log(count - 1);
  }

  return (
    <div className="space-x-2">
      <button
        onClick={handleIncrease}
        className="rounded bg-blue-700 text-white"
      >
        + Increase
      </button>
      <button
        onClick={handleDecrease}
        className="rounded bg-red-700 text-white"
      >
        - Decrease
      </button>
      <p>Counter: {count}</p>
    </div>
  );
}
