import { app } from "../../app.ts";
import { superoak } from "../../deps-test.ts";

Deno.test("it should return some JSON with status code 200", async () => {
  const request = await superoak(app);
  await request
    .post("/builder")
    .send({})
    .expect(200)
    .expect("Content-Type", /json/)
    .expect('{}');
});
