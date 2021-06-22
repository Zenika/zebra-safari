import { assert, assertEquals, Middleware, testing } from "./deps-spec.ts";

const mw: Middleware = async (ctx, next) => {
  await next();
  if (ctx.request.url.pathname === "/a") {
    ctx.response.body = "Hello a";
    ctx.response.headers.set("x-hello-a", "hello");
  }
};


Deno.test({
  name: "example test",
  async fn() {
    const ctx = testing.createMockContext({
      path: "/a",
    });
    const next = testing.createMockNext();

    await mw(ctx, next);

    assertEquals(ctx.response.body, "Hello a");
    assert(ctx.response.headers.has("x-hello-a"));
  },
});

