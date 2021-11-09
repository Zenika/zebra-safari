import { faker, times } from "../../deps.ts";
import { productFixtureFactory } from "../product/product.fixture.ts";
import { resourceFixtureFactory } from "../resource/resource.fixture.ts";
import { Recipe } from "./types.ts";

export const recipeFixtureFactory = ({
  ...params
}: Partial<Recipe> = {}): Recipe => {
  const numberOfIngredients = faker.random.number({
    min: 1,
    max: 3,
  });
  return {
    name: faker.name.findName(),
    ingredients: times(numberOfIngredients, () => resourceFixtureFactory()),
    product: productFixtureFactory(),
    ...params,
  };
};
