const Discord = require('discord.js'); // discord.js
const { prefix, token} = require('./settings.json'); // settings from config file

const client = new Discord.Client(); // create discord client
client.commands = new Discord.Collection();

// trigger on startup
client.on('ready', () => {
    console.log('system ready...\n');
    client.user.setActivity('the universe 🌟', { type: 'WATCHING' })
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get('736309214405722113').send(`Hello <@${member.user.id}>. Welcome to ${member.guild.name}.`); 
});


/////////////////////////////////////////////////////////////////////////////
client.login(token);
/////////////////////////////////////////////////////////////////////////////
