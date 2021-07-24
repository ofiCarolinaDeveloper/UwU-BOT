const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "amor",
  alias: [""],

execute (client, message, args){

  let user = message.mentions.users.first()
  if(!user) return message.channel.send("Debes mencionar a alguien")

  const embed = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 2%`)
  .setColor("#FF5050")

  const embed2 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 10%`)
  .setColor("#FF5050")

    const embed3 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 20%`)
  .setColor("#FF5050")

      const embed4 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 30%`)
  .setColor("#FF5050")

      const embed5 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 40%`)
  .setColor("#FF5050")

      const embed6 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 50%`)
  .setColor("#FF5050")

      const embed7 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 60%`)
  .setColor("#FF5050")

      const embed8 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 70%`)
  .setColor("#FF5050")

      const embed9 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 80%`)
  .setColor("#FF5050")

      const embed10 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 90%`)
  .setColor("#FF5050")

      const embed11 = new Discord.MessageEmbed()

  .setTitle("Amor")
  .setDescription(`${message.author.username} y ${user.username} se quieren un 100%`)
  .setColor("#FF5050")

  const embeds = [embed, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10]

  let embedfinal = embeds[Math.floor(Math.random() * embeds.length)]

  message.channel.send(embedfinal)

 }

}