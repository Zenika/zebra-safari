import { assert, assertArrayIncludes } from "../../deps-test.ts";
import { Type } from "./resource.enum.ts";
import { resourceFixtureFactory } from "./resource.fixture.ts";

Deno.test("resourceFixture", async (t) => {
  await t.step("should return a Resource", () => {
    assert(resourceFixtureFactory({ name: "matthias" }));
  });
  await t.step("should have valid type", () => {
    assertArrayIncludes(Object.values(Type), [resourceFixtureFactory().type]);
  });
});
