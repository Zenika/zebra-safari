import { faker } from "../../deps.ts";
import { Durability } from "../../services/builder/builder.ts";
import { resourceFixtureFactory } from "../resource/resource.fixture.ts";
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
