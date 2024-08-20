import { Bench } from "tinybench";
import { originalRegex } from "./functions/originalRegex.js";
import { nonGreedyRegex } from "./functions/nonGreedyRegex.js";
import { customSplit1 } from "./functions/customSplit1.js";
import { customSplit2 } from "./functions/customSplit2.js";
import { customSplit3 } from "./functions/customSplit3.js";
import { customSplit4 } from "./functions/customSplit4.js";

import { testCases } from "./test-cases.js";

const bench = new Bench({ time: 200 });

const functions = [
  originalRegex,
  nonGreedyRegex,
  customSplit1,
  customSplit2,
  customSplit3,
  customSplit4,
];

for (const fn of functions) {
  for (const testCase of testCases) {
    bench.add(`${fn.name} ${testCase.name}`, () => {
      fn(testCase.input);
    });
  }
}

await bench.warmup();
await bench.run();

console.table(bench.table());
