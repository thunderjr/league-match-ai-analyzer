import { DynamicTool } from "langchain/tools";
import { leagueRequester } from "../utils/league-requester";

const responseFields = [
  "accountId",
  "profileIconId",
  "revisionDate",
  "name",
  "id",
  "puuid",
  "summonerLevel",
];

export const getSummonerInfoTool = new DynamicTool({
  name: "GET_SUMMONER_INFO",
  description: `call this to get information about a league of legends summoner (player). input should be the summoner name. returns an object with the following fields: ${responseFields.join()}`,
  func: async (input) => {
    const response = await leagueRequester().get(
      `/summoner/v4/summoners/by-name/${input}`
    );

    console.log("GET_SUMMONER_INFO");
    console.log({ input, data: response.data });
    return JSON.stringify(response.data);
  },
});
