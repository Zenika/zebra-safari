import { description, assertEquals, assertThrows } from "./deps-test.ts";
import { Product, Resource, productBuilder, Type, Recipe } from "./builder.ts";
import { Durability } from "./builder.ts";
import { assertNotEquals } from "./deps-test.ts";

const oeuf: Resource = {
  type: Type.FOOD,
  name: "Oeuf de Poule",
};
const gruyere: Resource = {
  type: Type.FOOD,
  name: "Fromage suisse succulent",
};

const product: Product = {
  name: "Omelette au fromage",
  type: Type.MEAL,
  durability: Durability.LOW,
};

const omeletteRecipe: Recipe = {
  ingredients: [gruyere, oeuf],
  name: "Omelette au fromage",
  product,
};

Deno.test(
  description({
    name: "Should combine two Resource into one Product",
    given: "Two valid Resources that match a Recipe",
    should: "Build the right Product",
  }),
  () => {
    const omelette: Product = productBuilder([gruyere, oeuf], omeletteRecipe);

    assertEquals(product, omelette);
  }
);

Deno.test(
  description({
    name: "Should combine two Resource into one Product",
    given: "Two valid Resources that match a Recipe",
    should: "Build the right Product",
  }),
  () => {
    assertThrows(
      () => productBuilder([gruyere, gruyere], omeletteRecipe),
      undefined,
      "Provided resources don't match the recipe ingredients."
    );
  }
);
