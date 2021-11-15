import { Product } from "../product/types.ts";
import { Resource } from "../resource/types.ts";

export interface Recipe {
  name: string;
  ingredients: Resource[];
  product: Product;
}
