const durations = [
	{ name: "60 секунд", value: 60 * 1000 },
	{ name: "5 минут", value: 5 * 60 * 1000 },
	{ name: "10 минут", value: 10 * 60 * 1000 },
	{ name: "30 минут", value: 30 * 60 * 1000 },
	{ name: "1 час", value: 60 * 60 * 1000 },
	{ name: "1 день", value: 24 * 60 * 60 * 1000 },
	{ name: "1 неделя", value: 7 * 24 * 60 * 60 * 1000 },
]

const run = async (client, interaction) => {
	let member = interaction.options.getMember("user")
	let duration = interaction.options.getNumber("duration")
	let reason = interaction.options.getString("reason") || "No reason given"

	if (!member) return interaction.reply("You must provide a user to timeout")

	// ban
	try {
		await member.timeout(duration, reason)
		return interaction.reply(
			`${member.user.tag} был успешно наложен тайм-аут на ${durations.find((d) => duration === d.value)?.name} по причине: *${reason}*`
		)
	} catch (e) {
		if (e) {
			console.error(e)
			return interaction.reply(`Failed to timeout ${member.tag}`)
		}
	}
}

module.exports = {
	name: "timeout",
	description: "Timeout a member.",
	perms: "MODERATE_MEMBERS",
	options: [
		{ name: "user", description: "The user to timeout.", type: "USER", required: true },
		{
			name: "duration",
			description: "The duration of the timeout.",
			type: "NUMBER",
			choices: durations,
			required: true,
		},
		{
			name: "reason",
			description: "reason for the punishment.",
			type: "STRING",
			required: false,
		},
	],
	run,
}