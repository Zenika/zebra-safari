import { Durability } from "../../services/builder/builder.ts";
import { Resource } from "../resource/types.ts";

export interface Product extends Resource {
  durability: Durability;
}
