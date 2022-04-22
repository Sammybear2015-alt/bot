const DiscordJS = require('discord.js')
const dotenv = require('dotenv')
dotenv.config();


const client = new DiscordJS.Client({intents: 131071});

var activevar = ["with the &help command.", "with the developers console", "with some code", "with JavaScript"];
var activities = [(activevar[Math.floor(Math.random()*activevar.length)],
client.on('ready', () => {
    client.user.setActivity(activities);
}

client.on('ready', () => {
    const gulidId = '966852067178205274'
    const gulid = client.guilds.cache.get(gulidId)
    let commands

    if (gulid) {
        commands = gulid.commands
    }else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'getrole',
        description: 'adds a role'
    })
})



client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

    if(commandName === 'getrole') {
        interaction.member.roles.add('966862246414274560')
        interaction.reply({
            content: 'role added',
            ephemeral: true,
    })
    }
})

client.login(process.env.TOKEN)