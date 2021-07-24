const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  alias: ["hp"],

execute (client, message, args){

  const embedprincipal = new Discord.MessageEmbed()

 .setTitle("Bienvenid@ Al Apartado de Ayuda")
 .setDescription(`Reacciona a 🟠Para ir al apartado de General\n\n Reacciona a 🟢Para ir al apartado UwUCraft\n\nReacciona a ⚪Para ir de nuevo al inicio`)
 .setFooter("UwUCraft Bot")
 .setColor("WHITE")

 const embedmoderacion = new Discord.MessageEmbed()

 .setTitle("Apartado General")
 .setDescription("**-Amor**\n¿Quieres demostrar cuanto amas a otro usuari@ del servidor?\n\n**-md**\nTe llevarás una sorpresa\n\n**@uwuBot**\nEl bot te envía un embed si lo mencionas\n\n**-sug**\n¿Quieres enviar una sugerencia?")
 .setColor("ORANGE")

 const embedeconomia = new Discord.MessageEmbed()

 .setTitle("Apartado UwUCraft")
 .setDescription("**-ip**\nTe envia la ip y la versión del servidor")
 .setColor("GREEN")

 message.channel.send(embedprincipal).then(msg => {

   msg.react('🟠')
   msg.react('🟢')
   msg.react('⚪')

   msg.awaitReactions((reaction, user) => {
     if(message.author.id !== user.id) return;
     if(reaction.emoji.name === '🟠'){
       msg.edit(embedmoderacion)
     }
     
     if(reaction.emoji.name === '🟢'){
       msg.edit(embedeconomia)
     }

      if(reaction.emoji.name === '⚪'){
       msg.edit(embedprincipal)
     }
   })
 })
 }

}