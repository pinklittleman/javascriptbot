const Discord = require("discord.js")
require('dotenv').config();
const client = new Discord.Client({
	intents: [
	"GUILDS",
	"GUILD_MESSAGES"
    ]
})

client.on('ready', client => {
        client.channels.cache.get('934520011857461278').send('https://cdn.discordapp.com/attachments/934520011857461278/947953490351767602/index.png')})

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
