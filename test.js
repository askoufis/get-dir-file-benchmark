import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { originalRegex } from "./functions/originalRegex.js";
import { nonGreedyRegex } from "./functions/nonGreedyRegex.js";
import { customSplit1 } from "./functions/customSplit1.js";
import { customSplit2 } from "./functions/customSplit2.js";
import { customSplit3 } from "./functions/customSplit3.js";
import { testCases } from "./test-cases.js";

describe("originalRegex", () => {
  testCases.forEach(
    ({ name, input, expected: { dir: expectedDir, file: expectedFile } }) => {
      it(`should return the correct result for ${name}`, () => {
        const { dir, file } = originalRegex(input);

        strictEqual(dir, expectedDir);
        strictEqual(file, expectedFile);
      });
    },
  );
});

describe("nonGreedyRegex", () => {
  testCases.forEach(
    ({ name, input, expected: { dir: expectedDir, file: expectedFile } }) => {
      it(`should return the correct result for ${name}`, () => {
        const { dir, file } = nonGreedyRegex(input);

        strictEqual(dir, expectedDir);
        strictEqual(file, expectedFile);
      });
    },
  );
});

describe("customSplit1", () => {
  testCases.forEach(
    ({ name, input, expected: { dir: expectedDir, file: expectedFile } }) => {
      it(`should return the correct result for ${name}`, () => {
        const { dir, file } = customSplit1(input);

        strictEqual(dir, expectedDir);
        strictEqual(file, expectedFile);
      });
    },
  );
});

describe("customSplit2", () => {
  testCases.forEach(
    ({ name, input, expected: { dir: expectedDir, file: expectedFile } }) => {
      it(`should return the correct result for ${name}`, () => {
        const { dir, file } = customSplit2(input);

        strictEqual(dir, expectedDir);
        strictEqual(file, expectedFile);
      });
    },
  );
});

describe("customSplit3", () => {
  testCases.forEach(
    ({ name, input, expected: { dir: expectedDir, file: expectedFile } }) => {
      it(`should return the correct result for ${name}`, () => {
        const { dir, file } = customSplit3(input);

        strictEqual(dir, expectedDir);
        strictEqual(file, expectedFile);
      });
    },
  );
});
