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
  recipe: Recipe
): Product => {
  const zippedProduct = zip(recipe.ingredients, resources);
  const areResourcesEquals = zippedProduct.every(
    (el: Resource[]) => el[0] === el[1]
  );
  if (!areResourcesEquals) {
    throw new Error(`Provided resources don't match the recipe ingredients.`);
  }
  return cloneDeep(recipe.product);
};
