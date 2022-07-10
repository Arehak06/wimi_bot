const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

 module.exports = {
        name: "help",
        category: "test",
        devOnly: true,
        run: async ({client, message, args}) => {
            message.channel.send({
                embeds: [
                    new MessageEmbed()
                    .setColor('1cf0ff')
                    .setTitle('Команды бота')
                    .addFields(
                        { name: '1. Основное', value: '**!help** - Вызов команды помощи' },
                        { name: '2. Магазин', value: '**!shop** - Вызов команды магазина (В РАЗРАБОТКЕ!!!)', inline: true },
                        { name: '3. Модерация', value: '**/ban** - Забанить участника (через @)\n**/kick** - кикнуть игрока (через @)\n**/mute** - замутить игрока на определенное время\n**/timeout** - Выдать игроку тайм-аут', inline: true },
                        )
                ]
            })
        }
    }    