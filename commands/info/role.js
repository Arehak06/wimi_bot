const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "role",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Проверка на бота").setDescription("Выберите зеленую кнопку, после нажатие вы получите доступ к серверу").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-982324787869265920").setStyle("SUCCESS").setLabel('Нажми на меня:>')
                ])
            ]
        })
    }
}