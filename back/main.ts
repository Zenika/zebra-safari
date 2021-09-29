import { app } from "./app.ts";
import { config } from "./deps.ts";

const { PORT } = config();
console.log("app started on port : ", PORT);
await app.listen({ port: parseInt(PORT, 10) });
