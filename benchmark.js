import { Bench } from "tinybench";
import { originalRegex } from "./functions/originalRegex.js";
import { nonGreedyRegex } from "./functions/nonGreedyRegex.js";
import { customSplit1 } from "./functions/customSplit1.js";
import { customSplit2 } from "./functions/customSplit2.js";
import { customSplit3 } from "./functions/customSplit3.js";

import { shortPath, longPath, emojiPath } from "./test-cases.js";

const bench = new Bench({ time: 200 });

bench
  .add("original regex short path", () => {
    originalRegex(shortPath);
  })
  .add("original regex long path", () => {
    originalRegex(longPath);
  })
  .add("original regex emoji path", () => {
    originalRegex(emojiPath);
  })
  .add("non-greedy regex short path", () => {
    nonGreedyRegex(shortPath);
  })
  .add("non-greedy regex long path", () => {
    nonGreedyRegex(longPath);
  })
  .add("non-greedy regex emoji path", () => {
    nonGreedyRegex(emojiPath);
  })
  .add("customSplit1 short path", () => {
    customSplit1(shortPath);
  })
  .add("customSplit1 long path", () => {
    customSplit1(longPath);
  })
  .add("customSplit1 emoji path", () => {
    customSplit1(emojiPath);
  })
  .add("customSplit2 long path", () => {
    customSplit2(longPath);
  })
  .add("customSplit2 short path", () => {
    customSplit2(shortPath);
  })
  .add("customSplit2 emoji path", () => {
    customSplit2(emojiPath);
  })
  .add("customSplit3 short path", () => {
    customSplit3(shortPath);
  })
  .add("customSplit3 long path", () => {
    customSplit3(longPath);
  })
  .add("customSplit3 emoji path", () => {
    customSplit3(emojiPath);
  });

await bench.warmup();
await bench.run();

console.table(bench.table());
