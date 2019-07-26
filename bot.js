const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("604072458022289408")
setInterval(function() {
channel.send(`Spam credits Hack by MrDaMaR&Mahmoud|Spam credits Hack by MrDaMaR-Mahmoud=Spam credits Hack by MrDaMaR&Mahmoud|Spam credits Hack by MrDaMaR-Mahmoud`);
}, 30)
})

client.login(process.env.BOT_TOKEN);