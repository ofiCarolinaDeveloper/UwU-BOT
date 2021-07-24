const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const canalsgr = new db.crearDB('canalsugerencias')

module.exports = {
  name: "sgr",
  alias: ["sg"],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes permisos")

  const canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes mencionar un canal")

  message.channel.send(`Todo ha salido bien,las sugerencias serán enviadas a ${canal}`)

  canalsgr.establecer(`${message.guild.id}`, `${canal.id}`)
 
 }

}