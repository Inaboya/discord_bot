import Discord from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const options: Discord.ClientOptions = {
  intents: [],
};

const client: Discord.Client = new Discord.Client(options);

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("message", async (msg) => {
  if (msg.content === "ping") {
    await msg.reply("pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);