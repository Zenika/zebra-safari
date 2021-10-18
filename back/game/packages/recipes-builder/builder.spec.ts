import { description, assertEquals } from "./deps-test.ts";
import { Product, Resource, productBuilder, Type, Recipe } from "./builder.ts";
import { Durability } from "./builder.ts";

Deno.test(
  description({
    name: "Should combine two Resource into one Product",
    given: "Two valid Resources that match a Recipe",
    should: "Build the right Product",
  }),
  () => {
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
      ingredients: [oeuf, gruyere],
      name: "Omelette au fromage",
    };

    const omelette: Product = productBuilder([gruyere, oeuf], omeletteRecipe);

    assertEquals(product, omelette);
  }
);
