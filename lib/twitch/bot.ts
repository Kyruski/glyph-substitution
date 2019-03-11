import * as dotenv from "dotenv";
dotenv.config();
import tmi from "tmi.js";
import onMessageHandler from "./onMessage";
import onConnectedHandler from "./onConnect";

const opts: tmi.Options = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  // @ts-ignore
  channels: [process.env.CHANNEL_NAME]
};

// @ts-ignore
const client: tmi.Client = new tmi.client(opts);

client.on("message", onMessageHandler);
// @ts-ignore
client.on("connected", onConnectedHandler);

client.connect();

export default client;
