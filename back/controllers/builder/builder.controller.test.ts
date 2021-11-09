import { productFixtureFactory } from "../../entities/product/product.fixture.ts";
import { resourceFixtureFactory } from "../../entities/resource/resource.fixture.ts";
import { recipeFixtureFactory } from "../../entities/recipe/recipe.fixture.ts";
import { app } from "../../app.ts";
import { superoak } from "../../deps-test.ts";
import { times } from "../../deps.ts";

Deno.test("it should return some JSON with status code 200", async () => {
  const request = await superoak(app);
  const ingredients = times(2, () => resourceFixtureFactory());
  const product = productFixtureFactory();
  const recipe = recipeFixtureFactory({ ingredients, product });
  await request
    .post("/builder")
    .send({ ingredients, recipe })
    .expect(200)
    .expect("Content-Type", /json/)
    .expect(product);
});
