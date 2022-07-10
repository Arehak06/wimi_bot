const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "vk",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Понг").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setURL("https://vk.com/arehak").setStyle("LINK").setLabel("НЕ НАЖИМАЙ, ЕБЛАН")
                ])
            ]
        })
    }
}