import type { FastifyInstance } from "fastify";
import { readdirSync } from "fs";
import { join } from "path";

const handleFolder = (app: FastifyInstance, folderPath: string) => {
  readdirSync(folderPath).forEach(async (folderItem) => {
    if (!folderItem.endsWith(".map") && !folderItem.endsWith(".d.ts")) {
      if (!folderItem.endsWith(".ts") && !folderItem.endsWith(".js")) {
        return handleFolder(app, `${folderPath}/${folderItem}`);
      }

      return (await import(`${folderPath}/${folderItem}`)).default(app);
    }
  });
};

export const setupRoutes = (app: FastifyInstance): void => {
  const ROUTES_PATH = join(__dirname, "../routes");
  handleFolder(app, ROUTES_PATH);
};
