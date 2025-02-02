import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function getCountFromStorage() {
  const storedCount = localStorage.getItem("count");
  return storedCount ? JSON.parse(storedCount) : 0;
}

export function CounterRoute() {
  const [count, setCount] = useState(getCountFromStorage);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-4 text-3xl font-bold">Counter</h1>
      <p className="mb-6 text-xl">Count: {count}</p>
      <Button
        onClick={() => setCount(count + 1)}
        className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
      >
        Increment
      </Button>

      <h1 className="mb-4 mt-8 text-3xl font-bold">Timer</h1>
      <Timer />
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // Increment seconds each click
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="text-xl">
      <p>Elapsed Time: {seconds}s</p>
    </div>
  );
}
