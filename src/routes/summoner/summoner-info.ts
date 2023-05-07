import type { FastifyInstance } from "fastify";
import type { AxiosError } from "axios";

import { leagueRequester } from "../../utils/league-requester";

export default function (app: FastifyInstance) {
  app.get<{ Params: { summoner_name: string } }>(
    "/summoner/:summoner_name",
    async (req, res) => {
      const summonerName = req.params.summoner_name;

      try {
        const response = await leagueRequester().get(
          `/summoner/v4/summoners/by-name/${summonerName}`
        );
        res.send(response.data);
      } catch (err) {
        res.status(500).send((err as AxiosError).response?.data);
      }
    }
  );
}
