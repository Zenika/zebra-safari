import { superoak } from "./deps-spec.ts";
import app from "./app.ts";

Deno.test("it should return some JSON with status code 200", async () => {
  const request = await superoak(app);
  await request.get("/fizzbuzz/3")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect('{"number":3,"result":"FIZZ"}');
});
