const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "516318670016741397";//ايدي السيرفر
var channel = "516318840666324992";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا ')
	},100);
})

client.on('message', message => {
    let prefix = 'البريفكس';
   if(message.content.startsWith('say')) {
       let args = message.content.split(' ').slice(1).join(' ');
       message.channel.send(args)
   } 
});

client.login("NTE4NzQ1NDE5ODAzNzg3MjY0.DuVO0w.WaBdY3XFOOzPt7eynQPd0dwqyUc");
