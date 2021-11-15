import { assert, assertArrayIncludes } from "../../deps-test.ts";
import { Durability } from "./product.enum.ts";
import { productFixtureFactory } from "./product.fixture.ts";
Deno.test("productFixtureFactory", async (t) => {
  await t.step("should return a truthy product", () => {
    assert(productFixtureFactory());
  });
  await t.step("should return a product with a durability", () => {
    assertArrayIncludes(
      Object.values(Durability),
      [productFixtureFactory().durability],
    );
  });
});
