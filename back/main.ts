import { app } from "./app.ts";
import { log } from "./deps.ts";

app.addEventListener("listen", (evt) => {
  log.info(`Serveur en cours sur http://localhost:${evt.port}`);
});

await app.listen({ port: 8000 });
