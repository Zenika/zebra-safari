import { assertEquals, assertThrows, description } from "../../deps-test.ts";
import { Product } from "../product/types.ts";
import { Durability } from "../product/product.enum.ts";
import { Type } from "../resource/resource.enum.ts";
import { Resource } from "../resource/types.ts";
import { Recipe } from "./recipe.ts";

Deno.test(
  description({
    name: "Should combine resources with the recipe into one product",
    given: "Resources with the matching recipe resources",
    should: "Return a product",
  }),
  () => {
    const resources: Resource[] = [
      { name: "Oeuf", type: Type.FOOD },
      { name: "Fromage", type: Type.FOOD },
    ];
    const recipe: Recipe = new Recipe("Omelette au fromage", resources);
    const omelette: Product = recipe.combine(resources);

    const expectedResult = {
      name: "Omelette au fromage",
      durability: Durability.LOW,
      type: Type.MEAL,
    };

    assertEquals(omelette, expectedResult);
  },
);

Deno.test(
  description({
    name:
      "Should not combine resources when the given number of resources does not match the number of recipe resources",
    given: "3 resources",
    should: "throw an Error",
  }),
  () => {
    const recipeResources: Resource[] = [
      { name: "Oeuf", type: Type.FOOD },
      { name: "Fromage", type: Type.FOOD },
    ];
    const recipe: Recipe = new Recipe("Omelette au fromage", recipeResources);

    const resources: Resource[] = [
      { name: "Oeuf", type: Type.FOOD },
      { name: "Oeuf", type: Type.FOOD },
      { name: "Fromage", type: Type.FOOD },
    ];

    assertThrows(
      () => recipe.combine(resources),
      undefined,
      "Provided resources list doesn't match the recipe ingredients size.",
    );
  },
);

Deno.test(
  description({
    name:
      "Should not combine resources when the combination does not match recipe resources",
    given: "2 resources",
    should: "throw an Error",
  }),
  () => {
    const recipeResources: Resource[] = [
      { name: "Oeuf", type: Type.FOOD },
      { name: "Fromage", type: Type.FOOD },
    ];
    const recipe: Recipe = new Recipe("Omelette au fromage", recipeResources);

    const resources: Resource[] = [
      { name: "Oeuf", type: Type.FOOD },
      { name: "Oeuf", type: Type.FOOD },
    ];

    assertThrows(
      () => recipe.combine(resources),
      undefined,
      "Provided resources doesn't match the recipe resources.",
    );
  },
);
