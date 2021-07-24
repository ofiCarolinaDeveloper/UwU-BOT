const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "vrs",
  alias: ["crn"],

execute (client, message, args){

  const img = new Discord.MessageAttachment('https://media1.tenor.com/images/73a80b294191a5c3440f51d31f8b5af7/tenor.gif?itemid=12330833')
  message.channel.send(img);
 
 }

}