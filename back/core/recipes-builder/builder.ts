import { cloneDeep, zip } from "./deps.ts";

export enum Durability {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum Type {
  FOOD = "FOOD",
  MATERIAL = "MATERIAL",
  WEAPON = "WEAPON",
  TOOL = "TOOL",
  CLOTHES = "CLOTHES",
  MEAL = "MEAL",
}

export interface Resource {
  name: string;
  type: Type;
}

export interface Product extends Resource {
  durability: Durability;
}

export interface Recipe {
  name: string;
  ingredients: Resource[];
  product: Product;
}

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
    (el: Resource[]) => el[0] === el[1],
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
