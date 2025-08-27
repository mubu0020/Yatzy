import { test, expect, describe } from "vitest";
import { yatzeeScore } from "./yatzy.js";
import { countOnes } from "./yatzy.js";
test("scoring Chance add all dice", () => {
  expect(yatzeeScore("Chance", [1, 2, 3, 4, 5])).toBe(1 + 2 + 3 + 4 + 5);
});

test("How many ones did we get", () => {
  expect(countOnes([1, 1, 3, 4, 5])).toBe(2);
});

test("How many twos did we get", () => {
  expect(countTwos([2, 2, 2, 4, 5])).toBe(3);
});
