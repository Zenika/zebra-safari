import { faker } from "../../deps.ts";
import { Type } from "../../services/builder/builder.ts";
import { Resource } from "./types.ts";

export const resourceFixtureFactory = ({
  ...params
}: Partial<Resource> = {}): Resource => {
  return {
    name: faker.name.findName(),
    type: faker.random.arrayElement(Object.values(Type)),
    ...params,
  } as unknown as Resource;
};
