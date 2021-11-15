import { assert } from "../../deps-test.ts";
import { recipeFixtureFactory } from "./recipe.fixture.ts";

Deno.test("recipeFixtureFactory", async (t) => {
  await t.step("should return a truthy product", () => {
    assert(recipeFixtureFactory());
  });
});
