import { assertEquals, assertThrows, description } from "../../deps-test.ts";
import { compare } from "./utils.ts";

Deno.test(
  description({
    name: "compare",
    given: "2 object with the same key value",
    should: "Return 0",
  }),
  () => {
    const a: Record<string, string> = { name: "foo" };
    const b: Record<string, string> = { name: "foo" };
    assertEquals(compare(a, b, "name"), 0);
  },
);

Deno.test(
  description({
    name: "compare",
    given: "2 object not having the same key value",
    should: "throw an error",
  }),
  () => {
    const a: Record<string, string> = { name: "foo" };
    const b: Record<string, string> = { wrongKey: "foo" };
    assertThrows(
      () => compare(a, b, "name"),
      undefined,
      "Provided compare key must exist in both objects",
    );
  },
);

Deno.test(
  description({
    name: "compare",
    given: "2 object with the same key value",
    should: "Returns -1",
  }),
  () => {
    const a: Record<string, string> = { name: "a" };
    const b: Record<string, string> = { name: "b" };
    assertEquals(compare(a, b, "name"), -1);
  },
);

Deno.test(
  description({
    name: "compare",
    given: "2 object with the same key value",
    should: "Returns 1",
  }),
  () => {
    const a: Record<string, string> = { name: "b" };
    const b: Record<string, string> = { name: "a" };
    assertEquals(compare(a, b, "name"), 1);
  },
);
