import { cloneDeep, zip } from "../../deps.ts";
import { Product } from "../../domain/product/types.ts";
import { Recipe } from "../../domain/recipe/types.ts";
import { Resource } from "../../domain/resource/types.ts";

export const productBuilder = (
  resources: Resource[],
  recipe: Recipe,
): Product => {
  if (recipe.ingredients.length !== resources.length) {
    throw new Error(
      `Provided resources list doesn't match the recipe ingredients size.`,
    );
  }

  const zippedProduct = zip(
    recipe.ingredients.sort(sortResources),
    resources.sort(sortResources),
  );
  const areResourcesEquals = zippedProduct.every(
    (el: Resource[]) => JSON.stringify(el[0]) === JSON.stringify(el[1]),
  );
  if (!areResourcesEquals) {
    throw new Error(`Provided resources doesn't match the recipe ingredients.`);
  }

  return cloneDeep(recipe.product);
};

export const sortResources = (a: Resource, b: Resource): number => {
  const aResource = `${a.type}_${a.name}`;
  const bResource = `${b.type}_${b.name}`;
  if (aResource === bResource) {
    return 0;
  }
  return aResource > bResource ? 1 : -1;
};
