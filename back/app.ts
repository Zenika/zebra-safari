import { Router, Application } from "./deps.ts";
import { fizzbuzz } from "./fizzbuzz.ts";

const router = new Router();
// router.get("/book/:id", (context) => {
//   if (context.params && context.params.id) {
//     const number = context.params.id;
//     fizzbuzz(number);
//   }
// });

export const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
