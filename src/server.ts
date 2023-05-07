import "dotenv/config";
import fastify from "fastify";

import { LLL } from "./utils/league-logo";
import { setupRoutes } from "./config/setup-routes";

const app = fastify();

setupRoutes(app);

app
  .listen({
    port: Number(process.env.PORT) || 3333,
  })
  .then((address) => {
    console.log(`listening on ${address}`);
    console.log(LLL);
  });
