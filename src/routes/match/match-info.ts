import type { FastifyInstance } from "fastify";
import type { AxiosError } from "axios";

import { leagueRequester } from "../../utils/league-requester";

export default function (app: FastifyInstance) {
  app.get<{ Params: { match_id: string } }>(
    "/match/:match_id",
    async (req, res) => {
      const matchId = req.params.match_id;

      try {
        const response = await leagueRequester("americas").get(
          `/match/v5/matches/${matchId}`
        );
        res.send(response.data);
      } catch (err) {
        res.status(500).send((err as AxiosError).response?.data);
      }
    }
  );
}
