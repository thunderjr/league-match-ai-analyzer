import type { FastifyInstance } from "fastify";

import { analyzeByMatchId } from "../../services";

export default function (app: FastifyInstance) {
  app.get<{ Params: { match_id: string } }>(
    "/match/ai/:match_id",
    async (req, res) => {
      const matchId = req.params.match_id;

      try {
        const response = await analyzeByMatchId(matchId);
        res.send(response);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  );
}
