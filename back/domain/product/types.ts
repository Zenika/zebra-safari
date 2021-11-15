import { Resource } from "../resource/types.ts";
import { Durability } from "./product.enum.ts";

export interface Product extends Resource {
  durability: Durability;
}
