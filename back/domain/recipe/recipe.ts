import { Resource } from "../resource/types.ts";
import { Product } from "../product/types.ts";
import { Durability } from "../product/product.enum.ts";
import { Type } from "../resource/resource.enum.ts";

export class Recipe {
  constructor(public name: string, public resources: Resource[]) {
  }

  private checkLength(resources: Resource[]) {
    if (resources.length !== this.resources.length) {
      throw new Error(
        "Provided resources list doesn't match the recipe ingredients size.",
      );
    }
  }

  private checkCombination(resources: Resource[]) {
    const areResourcesEquals =
      JSON.stringify(this.resources) === JSON.stringify(resources);
    if (!areResourcesEquals) {
      throw new Error("Provided resources doesn't match the recipe resources.");
    }
  }

  combine(resources: Resource[]): Product {
    this.checkLength(resources);
    this.checkCombination(resources);

    return {
      name: "Omelette au fromage",
      durability: Durability.LOW,
      type: Type.MEAL,
    };
  }
}
