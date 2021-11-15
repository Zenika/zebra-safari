import { productBuilder } from "../../services/builder/builder.ts";
import { Router } from "../../deps.ts";

export const builderRouter = new Router();

builderRouter.post("/builder", async (context) => {
  try {
    const { ingredients, recipe } = await context.request.body().value;
    const product = productBuilder(ingredients, recipe);
    context.response.body = product;
    context.response.status = 200;
  } catch (error) {
    error.expose = true;
    throw error;
  }
});
