const Discord = require("discord.js")
const TOKEN="OTQ3MzA3NzI1ODc0OTMzNzkw.YhrXEQ.zlSXSHYHnYZIouLy8zrPYgfKrbg"
const client = new Discord.Client({
	intents: [
	"GUILDS",
	"GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
	console.log('logged in as ${client.user.tag}')
})
client.login(TOKEN)
