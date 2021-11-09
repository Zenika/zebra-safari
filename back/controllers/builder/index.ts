import { Router } from "../../deps.ts";
import { router } from "./builder.controller.ts";

export const builderRouter = new Router().use("/builder", router.routes());
