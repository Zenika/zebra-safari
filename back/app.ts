import { builderRouter } from "./controllers/builder/builder.controller.ts";
import { Application } from "./deps.ts";

export const app = new Application();
app.use(builderRouter.routes());
app.use(builderRouter.allowedMethods());
