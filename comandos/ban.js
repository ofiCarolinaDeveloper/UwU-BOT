const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  alias: ["banear"],

execute (client, message, args){

  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo los permisos")

  let user = message.mentions.members.first();

  let banReason = args.join(' ').slice(22);

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permisos para usar el comando")

  if(!user) return message.channel.send("Debes mencionar a alguien¡")

  if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("no puedes banear a una persona de igual o mayor poder que tú")

  if(user === message.author) return message.channel.send("No te puedes banear a ti mismo ¿Acaso eres tonto o le pinchas las ruedas a los trenes?")

  if(!banReason) return message.channel.send("Debes escribir una razón")

  user.ban({ reason: banReason})

  message.channel.send(`El usuario **${user}** fue baneado por **${banReason}**`)

 }

}