import axios from "axios";

export const leagueRequester = (region: "br1" | "americas" = "br1") =>
  axios.create({
    baseURL: `https://${region}.api.riotgames.com/lol`,
    headers: {
      "X-Riot-Token": process.env.RIOT_TOKEN,
    },
  });
