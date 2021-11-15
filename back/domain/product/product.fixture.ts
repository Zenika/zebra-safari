import { faker } from "../../deps.ts";
import { resourceFixtureFactory } from "../resource/resource.fixture.ts";
import { Durability } from "./product.enum.ts";
import { Product } from "./types.ts";

export const productFixtureFactory = ({
  ...params
}: Partial<Product> = {}): Product => {
  return {
    ...resourceFixtureFactory(),
    durability: faker.random.arrayElement(Object.values(Durability)),
    ...params,
  } as unknown as Product;
};
