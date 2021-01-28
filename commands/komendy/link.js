const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "link",
    aliases: ["invite", "zapros", "zaproś", "weekly", "bot", "linki"],
    run: async (client, msg) => {
        const linki = new Discord.MessageEmbed()

    .setTitle(":link: Linki do bota Weekly!")
    .setColor(0x0e4ee3)
    .addField("Support:", "> <a:pinezka:735603038005493870> Serwer support [`Kliknij`](https://discord.gg/H8EkAUr2GQ) na tym serwerze uzyskasz pomoc z botem **Weekly**")
    .addField("Dodaj bota:", "> <a:pinezka:735603038005493870> Link do naszego bota [**Sparfy**](https://discordapp.com/api/oauth2/authorize?client_id=8013719641026723872&permissions=8&scope=bot) \n> `Pamiętaj dostaniesz go tylko tutaj` \n> `lub na serwerze support!` \n> `od osoby z rolą support i wyższą!`")
    .setFooter(`Na życzenie ${msg.author.tag} | ${msg.author.id}`, `${msg.author.displayAvatarURL()}`)
    msg.channel.send(linki)
    }
    
}
