const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js'); //Definimos guild, MessageEmbed y otras cosas importantes
require('dotenv').config();
const keepAlive = require('./server.js'); //Definimos keepAlive que nos servirá para tener el bot 24/7
const fs = require('fs'); //Definimos fs
let { readdirSync } = require('fs'); //Definimos readdirSync que también lo necesitamos
const dbd = require("dbd.js")
const config = require("./config.json");

let prefix = config.prefix;

 
/*const bot = new dbd.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: "ODU1MTcxOTQwNTYwOTI4Nzc4.YMum7g.0XrmgC-8-2fvmUiL30HCxEui6jA", //Discord Bot Token
  prefix: ["-"] //Change PREFIX to your Prefix
})


bot.onMessage()
*/

client.on("ready", () => {
  console.log("Bot Activo");

  client.user.setPresence({
    activity: {
      name: `UwUBot|Help`,
      type: "PLAYING"
    },
    status: "online"
  })
});




//---------------Bienvenida.txt----------------------
client.on("guildMemberAdd", (membernew) => {
  let canalbienvenida = client.channels.cache.get("854146857211396118");

  if (canalbienvenida.id === "854146857211396118") {
    const embed4121 = new Discord.MessageEmbed()
      .setColor("#F6F2EF")
      .setDescription(`Hey ${membernew.displayName}, bienvenido a UwU Craft, pasala bien!.`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic:true, format: "png", size:1024}))
    .setFooter('Id De Usuario: ' + member.user.id)
    .setTimestamp()
    .setImage("https://media.discordapp.net/attachments/844198304682475552/855594992021012480/AncientSevereKitten-max-1mb.gif");          //https://i.ibb.co/9NbnfJk/0HxfTaZ.gif
    canalbienvenida.send(embed4121);
  }
  if (canalbienvenida.id === "854146857211396118") {
    const embed = new Discord.MessageEmbed()
      .setColor("F6F2EF")
      .setDescription("Gracias por unirte a nuestra comunidad. De parte del staff le deseamos una buena estancia. Recuerda pasartelo bien y leer las <#798643800519737384>")
      .setTitle("AVISO");
    membernew.send(embed);
  }
});
//----------------------------------Despedida------------------------------------
client.on("guildMemberRemove", (member) => {
  let canal = client.channels.cache.get('814473934795440168');
  const embed = new Discord.MessageEmbed()
    .setTitle("Noooo Por que¡¡¡¡¡¡¡")
    .setDescription(`El usuari@ **${member.user}** ha abandonado el servidor`)
    .setColor("RED");
    canal.send(embed);
});

//-------------------------------------Staff Commands----------------------------------------------------

//commands

client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + "avatar")) {
    if (message.guild == null) {

    } else {
      let miembroavatar = message.mentions.users.first()
      if (!miembroavatar) {
        const embed333 = new Discord.MessageEmbed()
          .setImage(`${message.author.displayAvatarURL()}`)
          .setColor("RANDOM")
          .setFooter(`Avatar de ${message.author.tag}`);
        message.channel.send(embed333);

      } else {
        const embed222 = new Discord.MessageEmbed()
          .setImage(`${miembroavatar.displayAvatarURL()}`)
          .setColor("RANDOM")
          .setFooter(`Avatar de ${miembroavatar.tag}`);

        message.channel.send(embed222);

      };
    }
  }
});

client.on("message", message => {
  const argsiii = message.content.slice(prefix.length).trim().split(/ +/g);
  let canalsugerencias = client.channels.cache.get("854279121281744896");
  const command = argsiii.shift().toLowerCase();
  let sugerencia = argsiii.join(" ");


  if (message.content.toLowerCase().startsWith(prefix + "sugerencia")) {
    if (message.guild == null) {

    } else {
      if (message.channel.id === "854279704848367636") {
        if (canalsugerencias.id === "854279121281744896") {
          if (!sugerencia) return message.channel.send(`Escriba la sugerencia a enviar.`);
          const embed = new Discord.MessageEmbed()

            .setColor("RANDOM")
            .setDescription(sugerencia)
            // .addField(sugerencia)  //+ message.author.displayName +" Mensaje: "+ textostaff
            .setTitle("NUEVA SUGERENCIA")
            //.setImage(message.author.displayAvatarURL())
            .setAuthor(message.author.username, message.author.displayAvatarURL())
          canalsugerencias.send(embed).then(msg => {
            msg.react("✅")
            msg.react("🤷‍♀️")
            msg.react("❌")
          })
          const embed2 = new Discord.MessageEmbed()
            .setDescription("**Sugerencia enviada exitosamente**");
          message.author.send(embed2);
        } else {
          message.channel.send("Este comando va en <#854279704848367636>");
        }
      }
    }
  }
})

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + "ban")) {
    if (message.guild == null) {

    } else {
      if (message.member.roles.cache.find(rol => rol.id === "868403569471160352")) {
        let mencionado = message.mentions.users.first();
        let razon = args.slice(1).join(' ');

        if (!mencionado) return message.reply(message.author.username + " Menciona al usuario que deseas que sea baneado. Pon `-ban` y mencionale. Este comando será cancelado en `10 Segundos`").then(msg => msg.delete({ timeout: 10000 }));
        if (!razon) return message.channel.send(message.author.username + " No has escrito ningúna razón del baneo. Pon `-ban` y escribe la razón. Este comando será cancelado en `10 Segundos`").then(msg => msg.delete({ timeout: 10000 }));
        const embed = new Discord.MessageEmbed()
          .setColor("FF0000")
          .setTitle("HAS SIDO BANEADO")
          .setDescription("El staff de UwU Craft ha decidido banearte por la siguiente razón: " + razon)
        mencionado.send(embed);
        message.guild.members.ban(mencionado, { reason: razon });


      } else {
        message.channel.send("Este comando es exclusivo para el Staff.")
      }
    }
  }
});

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + "delete")) {
    if (message.guild == null) {
    } else {
      if (message.member.roles.cache.find(rol => rol.id === "868403569471160352")) {
        let cantidad = parseInt(args[0]);
        if (cantidad <= "100") {
          message.channel.bulkDelete(cantidad);
        } else {
          message.channel.send(message.author.username + " La cantidad maxima para borar es 100 mensajes. Pon `-delete` y selecciona una cantidad menor o igual que 100. Este comando será cancelado en `10 Segundos`").then(msg => msg.delete({ timeout: 10000 }));
        }
      } else {
        message.channel.send("Este comando es exclusivo para el Staff.")
      }
    }
  }
});

client.on("message", (message) => {
  
    if (message.guild == null) {
      const embed = new Discord.MessageEmbed()
      .setColor("FF0000")
      .setTitle("Aviso")
      .setDescription("Hola, Para usar mis comandos mandame un mensaje al server")
    message.author.send(embed);
    }});

client.on("message", (message) => {
  if (message.content.toLowerCase().startsWith(prefix + "nuke")) {
    if (message.guild == null) {

    } else {
      if (message.member.roles.cache.find(rol => rol.id === "851517548784779294")) {
        let link = ("https://i.gifer.com/Hgp9.gif")
        const nuke = new Discord.MessageAttachment(link, "nuke.gif")
        var posicion = message.channel.position
        message.channel.clone().then((canal) => {
          message.channel.delete()
          canal.setPosition(posicion)
          canal.send("This chanel has been nuked", nuke)

        })
      } else {
        message.channel.send("Este comando es exclusivo para el Staff.");
      }
    }
  }
});

client.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const ms = require("ms")

  if (message.content.toLowerCase().startsWith(prefix + "recordar")) {
    if (message.guild == null) {

    } else {
      let tiempo = args[1];
      let time = ms(tiempo)
      let cosa = args.slice(2).join("  ")
      if (!tiempo) return message.channel.send(message.author.username + " No has especificado el tiempo. Escribe  `-recordar` y pon la cantidad de tiempo. Este comando será cancelado en `10 Segundos`").then(msg => msg.delete({ timeout: 10000 }))
      if (!cosa) return message.channel.send(message.author.username + " No has especificado el contenído del recordatorio. Escribe  `-recordar` y especifícalo. Este comando será cancelado en `10 Segundos`").then(msg => msg.delete({ timeout: 10000 }))

      setTimeout(() => {
        message.channel.send(`${message.author},` + `tu recordatorio de **${cosa}** se ha activado`)
      }, time)
    }
  }
})

client.on("message", message => {
  const argsii = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = argsii.shift().toLowerCase();
  let channel = message.mentions.channels.first()
  if (message.content.toLowerCase().startsWith(prefix + "say")) {
    if (message.guild == null) {

    } else {
      if (message.member.roles.cache.find(rol => rol.id === "868403569471160352")) {
        let texto = argsii.join(" ");
        if (!texto) return message.channel.send(`Escriba el contenido a enviar.`);
        if (!channel) { message.channel.send(texto) } else {
          channel.send(texto)
        }
      } else {
        let texto = argsii.join(" ");
        if (!texto) return message.channel.send(`Escriba el contenido a enviar.`);
        const embed = new Discord.MessageEmbed()
          .setDescription(`**${texto}**`)
          .setFooter("Recuested by " + message.author.username)
        message.channel.send(embed)
      }
    }
  }
})

client.on("message", message => {
  const argsiii = message.content.slice(prefix.length).trim().split(/ +/g);
  let miembrodm = message.mentions.users.first();
  const command = argsiii.shift().toLowerCase();
  if (message.content.toLowerCase().startsWith(prefix + "dm")) {
    if (message.guild == null) {

    } else {
      if (message.member.roles.cache.find(rol => rol.id === "868403569471160352")) {
        let textostaff = argsiii.join(" ");
        if (!textostaff) return message.channel.send(message.author.username + " No has escrito ningún mensaje para enviar. Pon  `-dm` y pon tu mensaje. Este comando será cancelado en `10 Segundos`").then(msg => msg.delete({ timeout: 10000 }));
        if (!miembrodm) return message.channel.send(message.author.username + " No has mencionado a un usuario. Pon  `-dm` y menciona a alguien. Este comando será cancelado en `10 Segundos`").then(msg => msg.delete({ timeout: 10000 }))

        const embed = new Discord.MessageEmbed()
          .setColor("FFB90B")
          .setTitle("MENSAJE DE UN STAFF")
          .setAuthor(message.author.username, message.author.displayAvatarURL())
          .setDescription(textostaff)
          .setFooter("Mensaje Enviado -- " + miembrodm.username);
        message.delete();

        miembrodm.send(embed);

        const embed2 = new Discord.MessageEmbed()
          .setDescription("**Mensaje enviado exitosamente**");

        message.author.send(embed2);

        const embed21322 = new Discord.MessageEmbed()
          .setDescription("**No respondas a este mensaje. El Staff no lo leerá**");

        miembrodm.send(embed21322);
      } else {
        message.channel.send("Este comando es exclusivo para el Staff.");
      }
    }
  }
})

//PRESENCIA


client.on('message', (message) => { //Abrimos un evento message, esto es muy importante porque es donde estarán los comandos
  if (message.guild == null) {

  }else{
   if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
  const embed = new Discord.MessageEmbed()
  .setTitle("¿Que Tal?")
  .setDescription(`Hola! Soy el bot oficial del servidor ¿En que te puedo ayudar? si quieres saber mas comandos coloca -help`)
  .setColor("#FDCEDF")
  .setImage(`https://media.discordapp.net/attachments/844198304682475552/855949011983138816/af9e3db9edc095f6f941473def765b13.gif`)
  message.channel.send(embed)
}

if(message.author.bot) return; //Con esto hacemos que el bot no responda a mensajes de otros bots lo cual evitará que entre en bucles
if(!message.content.startsWith(prefix)) return; //Aquí hacemos que si el mensaje no empieza con el prefix el bot no responda


const args = message.content.slice(prefix.length).trim().split(/ +/g); //Definimos los argumentos
const command = args.shift().toLowerCase(); //Definimos el comando
}})

/*

bot.command({
    name: "play",
    code: `
    $author[Canción Añadida]
    $description[ Añadida **$playSong[$noMentionMessage;1d;yes;{title:Error} {description:Algo ha fallado!} {color:RED}] **onto queue!]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:Conectate al canal de voz!} {color:FF0000}]`
    });

bot.command({
    name: "skip",
    code: `
    $author[Music Skipped]
    $skipSong
    $description[<@$authorID> skipped to the next song!]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:FF0000}]`
    });

bot.command({
    name: "stop",
    code: `
    $author[Music Stopped]
    $stopSong
    $description[<@$authorID> stopped the queue!]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:FF0000}]`
    });

bot.command({
    name: "loop",
    code: `
    $author[Music Loop]
    $description[<@$authorID> has $replaceText[$replaceText[$checkCondition[$loopQueue==true];true;enabled loop];false;disabled loop]]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:FF0000}]`
    });

bot.variables({
    Name: "Value", 
    Name2: "Value2"
  })

////HANDLER



client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

for(const file of readdirSync('./eventos')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}











/*

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)

}

}); //Cerramos el evento


///BOT 24/7

const Monitor = require('ping-monitor')

keepAlive();
const monitor = new Monitor({
  website: 'https://UwUBot.spectrumuser.repl.co',
  title: 'Bot',
  interval: 5
})
*/

//const token = process.env["Bot"]

client.login("ODY4NDA5MjE1MDQ2MjU0NjMy.YPvPGw.4oC9pXHXjCGH1tY1xZcwu84EUpw")