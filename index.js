const Discord = require("discord.js")
require('dotenv').config();
const client = new Discord.Client({
	intents: [
	"GUILDS",
	"GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
	console.log('logged in as ${client.user.tag}')
})

client.on('messageCreate', (message) => {
	if(message.content === 'russia'){
	message.reply({
	content: 'BAD'
	})
  }
})

client.on('messageCreate', (message) => {
	if(message.content === 'china'){
	message.reply({
	content: 'long live the CPP'
	})
  }
})

client.on('messageCreate', (message) => {
	if(message.content === 'ukraine'){
	message.reply({
	content: 'GOOD'
	})
  }
})

client.login(process.env.TOKEN)
