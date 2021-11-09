import { productBuilder, sortResources, Type } from "./builder.ts";
import { Durability } from "./builder.ts";
import { Product } from "../../entities/product/types.ts";
import { Recipe } from "../../entities/recipe/types.ts";
import { Resource } from "../../entities/resource/types.ts";
import { assertEquals, assertThrows, description } from "../../deps-test.ts";

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
  },
);

Deno.test(
  description({
    name: "Should combine two Resource into one Product",
    given: "Two valid Resources that doesn't match the Recipe",
    should: "Throw the right error (content)",
  }),
  () => {
    assertThrows(
      () => productBuilder([gruyere, gruyere], omeletteRecipe),
      undefined,
      "Provided resources doesn't match the recipe ingredients.",
    );
  },
);

Deno.test(
  description({
    name: "Should combine three Resource into one Product",
    given: "Three valid Resources that doesn't match the Two Resources Recipe",
    should: "Throw the right error (size)",
  }),
  () => {
    assertThrows(
      () => productBuilder([gruyere, gruyere, oeuf], omeletteRecipe),
      undefined,
      "Provided resources list doesn't match the recipe ingredients size.",
    );
  },
);

Deno.test(
  description({
    name: "Should combine two Resource into one Product",
    given: "Two valid Resources that match a Recipe in another order",
    should: "Build the right Product",
  }),
  () => {
    const omelette: Product = productBuilder([oeuf, gruyere], omeletteRecipe);

    assertEquals(product, omelette);
  },
);

Deno.test(
  description({
    name: "Should sort two Resource by type and name",
    given: "Two valid Resources",
    should: "Return the expected order",
  }),
  async (t) => {
    await t.step("first resource is the same as the second", () => {
      const result: number = sortResources(oeuf, oeuf);
      assertEquals(result, 0);
    });

    await t.step("first resource should stay first", () => {
      const result: number = sortResources(oeuf, gruyere);
      assertEquals(result, 1);
    });

    await t.step("first resource should move last", () => {
      const result: number = sortResources(gruyere, oeuf);
      assertEquals(result, -1);
    });
  },
);
