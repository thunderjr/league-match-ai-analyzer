import { DynamicTool } from "langchain/tools";
import { leagueRequester } from "../utils/league-requester";

export const getMatchInfoTool = new DynamicTool({
  name: "GET_MATCH_INFO",
  description: `call this to get information from a specific league of legends match. input should be the match id`,
  func: async (input) => {
    const response = await leagueRequester("americas").get(
      `/match/v5/matches/${input}`
    );

    console.log("GET_MATCH_INFO");
    console.log({ input, data: response.data });
    return JSON.stringify(response.data);
  },
});
