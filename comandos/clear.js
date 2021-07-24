const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "clear",
  alias: ["borrar"],

execute (client, message, args){



  const cantidad = args.join(" ");

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("Necesitas el permiso **GESTIONAR MENSAJE** para poder usar este comando")

  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Necesito el permiso **GESTIONAR MENSAJES** para poder ejecutar este comando")

  if(!cantidad) return message.channel.send("Debes escribir una cantidad")

  if(cantidad === '0') return message.channel.send("Debes escribir un número mayor a 0")

  message.channel.bulkDelete(cantidad).then(()=> {
    message.channel.send(`**${cantidad}** mensajes borrados correctamente`)
  })
  
 }

}