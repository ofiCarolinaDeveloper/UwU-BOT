const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const cosa = new db.crearDB('canalsugerencias')

module.exports = {
  name: "sug",
  alias: [""],

async execute (client, message, args){

  const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}`)
  const canalsugerencia = client.channels.cache.get(canal)

  if(!cosa.tiene(`${message.guild.id}`, `${message.channel.id}`)){
    message.channel.send("Este servidor no tiene ningun canal establecido")

    return;
  }

  const usuario = message.author

  const sugerencia = args.join (" ")
  if(!sugerencia) return message.channel.send("Debes decir que quieres sugerir")

  const embed = new Discord.MessageEmbed()

  .setTitle("Ha Llegado Una Nueva Sugerencia")
  .setAuthor(usuario.tag, message.author.displayAvatarURL())
  .setDescription(`${sugerencia}`)
  .setColor("#82d4f5")
  .setFooter("Si quieres escribir una sugerencia escibe -sug")

  const embedbueno = new Discord.MessageEmbed()

  .setTitle("Todo ha salido bien")
  .setDescription("La sugerencia ha sido enviada")
  .setColor("GREEN")

  message.channel.send(embedbueno)

  canalsugerencia.send(embed).then(async msg => {
    await msg.react('✅');
    await msg.react('❌');
  })

 }

}