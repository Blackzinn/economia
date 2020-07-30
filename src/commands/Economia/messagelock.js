const db = require("quick.db");
const c = require('config.json');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
   let erro = new Discord.RichEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Mensagem ao usar comando em um canal bloqueado*`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}messagelock <mensagem>\``, true)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}messagelock blockedd\``, true)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhum\``)
  .setColor('#a67dff')    


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:alert:696822589208920124> **»** Kon'nichiwa **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
    if (isNaN(args.join(" "))) return message.channel.send(erro)
   
    var messagem = db.set(`messagem_${message.guild.id}`, args.join(" ").trim())

    message.channel.send(`<a:yep:698221405434806282> **»** Mensagem adicionada ao bloquear o canal.`)

}

exports.help = {
    name: 'messagelock',
    aliases: []
}
