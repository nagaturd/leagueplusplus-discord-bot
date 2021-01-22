const { apiKey } = require("../config.json");
const fetch = require("node-fetch");

module.exports = {
    name: "level",
    description: "Shows summoner account level.",
    aliases: [],
    args: true,
    usage: "<summonerName>",
    async execute(message, args) {
        const summonerName = encodeURI(args.join(" "));
        const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`;
        console.log("About to fetch url: ", url);
        const summoner = await fetch(url).then((response) => response.json());
        console.log(summoner);
        /*if (!summoner.length) {
            return message.channel.send(`No results found for **${args.join(' ')}**.`);
        }*/

        message.channel.send(`Summoner Level: ${summoner.summonerLevel}`);
    },
};
