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
}

export const productBuilder = (
  resources: Resource[],
  recipe: Recipe
): Product => {
  console.log(resources);
  console.log(recipe);

  return {} as Product;
};
