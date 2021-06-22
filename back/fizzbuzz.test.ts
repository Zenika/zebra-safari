import { assertEquals } from "./deps-test.ts";
import { fizzbuzz } from "./fizzbuzz.ts";

Deno.test("should return the entry number by default", () => {
  const number = 1;

  const result = fizzbuzz(number);

  assertEquals("1", result);
});

Deno.test("should return FIZZ if multiple of 3", () => {
  const number = 3;

  const result = fizzbuzz(number);

  assertEquals("FIZZ", result);
});

// Fully fledged test definition, longer form, but configurable (see below)
Deno.test("should return BUZZ if multiple of 5", () => {
  const number = 5;

  const result = fizzbuzz(number);

  assertEquals("BUZZ", result);
});

Deno.test("should return FIZZBUZZ if multiple of 3 and 5", () => {
  const number = 15;

  const result = fizzbuzz(number);

  assertEquals("FIZZBUZZ", result);
});
