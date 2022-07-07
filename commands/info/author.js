const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

 module.exports = {
        name: "author",
        category: "test",
        devOnly: true,
        run: async ({client, message, args}) => {
            message.channel.send({
                embeds: [
                    new MessageEmbed().setColor('fa005c')
                    .setTitle('Информация о боте')
                    .addFields(
                        { name: 'Автор', value: 'Arehak#7847' },
                        { name: 'О боте', value: 'Бот создан на Node.js\n Бот создавался под руководством Bennnny#0001', inline: true },
                        { name: 'Состояние', value: 'Стабильное', inline: true },
                    )
                ],
                components: [
                    new MessageActionRow()
                    .addComponents([
                        new MessageButton().setURL("https://vk.com/arehak").setStyle("LINK").setEmoji('994728754481987644')

                    ])
                    .addComponents([
                        new MessageButton().setURL("https://t.me/Arehak").setStyle("LINK").setEmoji('994733046588784690')

                    ])
                        
                ]
            })
        }
    }