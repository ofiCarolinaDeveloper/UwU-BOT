const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "md",
  alias: [""],

execute (client, message, args){

  const persona = message.mentions.users.first()
  if (message.guild == null) {

    } else {
      "-help"
    }
  if(!persona) return message.channel.send("Debes Mencionar A Alguien")

  persona.send("Hola")

 }

}