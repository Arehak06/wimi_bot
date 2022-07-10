const { MessageEmbed } = require('discord.js')
const run = async (client, interaction) => {
	let user = interaction.options.getUser("user")
	let reason = interaction.options.getString("reason") || "No reason given"

	if (!user) return interaction.reply("You must provide a user to kick")

	// ban
	try {
		await interaction.guild.members.kick(user, reason)
		return interaction.reply({ embeds: [exampleEmbed] })
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`Failed to kick ${user.tag}`)
		}
	}
}

module.exports = {
	name: "kick",
	description: "Kicks a user from the server.",
	perms: "KICK_MEMBERS",
	options: [
		{ name: "user", description: "The user to kick.", type: "USER", required: true },
		{
			name: "reason",
			description: "reason for the punishment.",
			type: "STRING",
			required: false,
		},
	],
	run,
}


// inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`Kick`)
	.setDescription(`Игрок был кикнут`);