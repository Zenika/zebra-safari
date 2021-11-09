import { Router } from "../../deps.ts";

export const router = new Router();

router.post("/", (context) => {
  context.response.body = {};
  context.response.status = 200;
});
