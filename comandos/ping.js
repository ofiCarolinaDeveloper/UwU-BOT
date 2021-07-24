const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "hola",
  alias: ["ho"],

execute (client, message, args){

      message.channel.send('Holita')
 
 }

}