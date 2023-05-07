import { JsonToolkit, createJsonAgent } from "langchain/agents";
import { OpenAI } from "langchain/llms/openai";

import { JsonSpec } from "langchain/tools";
import { leagueRequester } from "../utils/league-requester";

export const analyzeByMatchId = async (matchId: string) => {
  try {
    const response = await leagueRequester("americas").get(
      `/match/v5/matches/${matchId}`
    );

    const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });

    const input =
      "Get to know some league of legends relevant statistics, and extract some of them from this league of league match data";

    const toolkit = new JsonToolkit(new JsonSpec(response.data));
    const executor = createJsonAgent(model, toolkit);
    const result = await executor.call({ input });

    console.log(
      `Got intermediate steps ${JSON.stringify(
        result.intermediateSteps,
        null,
        2
      )}`
    );

    return result.output;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
