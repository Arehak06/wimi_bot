const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.slashcommands = new Discord.Collection()

let bot = {
    client,
}

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

const guildId = "971364730688131103"

client.on("ready", async () => {
    console.log(`Загружаются ${client.slashcommands.size} слэш команды`)

    const guild = client.guilds.cache.get(guildId)
    if (!guild)
        console.error("Target Guild not found")

    await guild.commands.set([...client.slashcommands.values()])
    console.log("Finished")
    process.exit(0)
})

client.login(process.env.TOKEN)