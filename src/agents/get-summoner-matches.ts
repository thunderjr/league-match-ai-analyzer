import { DynamicTool } from "langchain/tools";
import { leagueRequester } from "../utils/league-requester";

export const getSummonerMatchesTool = new DynamicTool({
  name: "GET_SUMMONER_MATCHES",
  description: `call this to get the last 20 matches ids from a league of legends summoner (player). input should be the summoner puuid. returns a list of strings`,
  func: async (input) => {
    const response = await leagueRequester("americas").get(
      `/match/v5/matches/by-puuid/${input}/ids`
    );

    console.log("GET_SUMMONER_MATCHES");
    console.log({ input, data: response.data });
    return JSON.stringify(response.data);
  },
});
