import { add } from "./lib/math.ts";

export function App() {
  const personAge1 = 20;
  const personAge2 = 30;
  const personAgeSum = add(personAge1, personAge2);

  return (
    <div>
      <h2>Sum of 2 numbers</h2>
      <h2>
        {personAge1} + {personAge2} = {personAgeSum}
      </h2>
    </div>
  );
}
