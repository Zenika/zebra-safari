import {assertEquals} from "https://deno.land/std@0.98.0/testing/asserts.ts";
import {fizzbuzz} from './fizzbuzz.ts';

Deno.test("should return the entry number by default", () => {
});

Deno.test("should return FIZZ if multiple of 3", () => {
    const number = 3;

    const result = fizzbuzz(number);

    assertEquals("FIZZ", result);
});

// Fully fledged test definition, longer form, but configurable (see below)
Deno.test("should return BUZZ if multiple of 5", () => {
});


Deno.test("should return FIZZBUZZ if multiple of 3 and 5", () => {
    const x = 1 + 2;
    assertEquals(x, 4);
});