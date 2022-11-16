const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
   disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login('MTAxNTY0MzUwMTg0Njg2NDA1Mw.Grwd7g.-sUF26-CmfFKeEfB7EGggfLFtG1kaQXd2qs7Uc');