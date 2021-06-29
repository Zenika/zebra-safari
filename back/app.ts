import { Application, Router } from "./deps.ts";
import { fizzbuzz } from "./fizzbuzz.ts";

const router = new Router();
router.get("/fizzbuzz/:number", (context) => {
  if (context?.params?.number) {
    const number = +context.params.number;
    const result = fizzbuzz(number);
    context.response.body = {
      number,
      result,
    };
    context.response.status = 200;
  }
});

export const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
