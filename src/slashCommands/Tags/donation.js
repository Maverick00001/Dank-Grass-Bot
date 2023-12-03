const { EmbedBuilder, CommandInteraction, Client, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "donate",
  description: "cmd to donate money!",
  options: [
    {
      name: "giveaway",
      description: "donate for giveaways",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "amount",
          description: "amount to be donated",
          required: true,
          type: ApplicationCommandOptionType.String,
      },
      {
          name: "requirement",
          description: "requirement of the event",
          required: true,
          type: ApplicationCommandOptionType.String,
      },
      {
          name: "message",
          description: "message of the donor",
          required: true,
          type: ApplicationCommandOptionType.String,
      },
      ]
    },
    {
      name: "events",
      description: "events donation",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
            name: "amount",
            description: "amount to be donated",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "requirement",
            description: "requirement of the event",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "event-type",
            description: "type of event you wanna host e.g rumble etc",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "message",
            description: "message of the donor",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
      ]
    }, 
    {
      name: "heist",
      description: "heist donations",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
            name: "amount",
            description: "amount to be donated",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "requirement",
            description: "requirement of the event",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "message",
            description: "message of the donor",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
      ]
    },     
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction) => {

    const requirement = interaction.options.getString("requirement");
    const message = interaction.options.getString("message");
    const amount = interaction.options.getString("amount");
    const eventType = interaction.options.getString("event-type");

    const subcommand = interaction.options.getSubcommand();
    if(subcommand == "giveaway") {
      const em = new EmbedBuilder()
    .setTitle("New Giveaway Donation!!")
    .setDescription(`**New donation request!**\n<:dg_arrow:1168074869414563860> **Donation Type:** Giveaway\n<:dg_arrow:1168074869414563860> **Donor**: ${interaction.user}\n<:dg_arrow:1168074869414563860> **Amount**: ${amount}\n<:dg_arrow:1168074869414563860> **Requirements**: ${requirement}\n<:dg_arrow:1168074869414563860> **Message:** ${message}`)
    .setThumbnail(`https://media0.giphy.com/media/KBIzfEK5kikIUiNaGP/200w.gif?cid=6c09b9524z6hox6rjupb7273rz9wrpscpc95fle4rhy5h1ql&ep=v1_gifs_search&rid=200w.gif&ct=g`)
    .setFooter({ text: `Thank you for donating <3` })
    
    
    await interaction.reply({ content: `<@&1156833344730955806>`, embeds: [em] })
  
    } else if(subcommand == "events") {
        const em = new EmbedBuilder()
        .setTitle("New Event Donation!!")
        .setDescription(`**New donation request!**\n<:dg_arrow:1168074869414563860> **Donation Type:** Events\n<:dg_arrow:1168074869414563860> **Donor**: ${interaction.user}\n<:dg_arrow:1168074869414563860> **Amount**: ${amount}\n<:dg_arrow:1168074869414563860> **Requirements**: ${requirement}\n<:dg_arrow:1168074869414563860> **Event Type**: ${eventType}\n<:dg_arrow:1168074869414563860> **Message:** ${message}`)
        .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAQFLJA6_A-ufPH2f7Elao3iyKzDtFTGKElNll69h&s`)
        .setFooter({ text: `Thank you for donating <3` })
    
    
    await interaction.reply({ content: `<@&1156833502524883025>`, embeds: [em] })
    } else if(subcommand == "heist") {
        const em = new EmbedBuilder()
        .setTitle("New Heist Donation!!")
        .setDescription(`**New donation request!**\n<:dg_arrow:1168074869414563860> **Donation Type:** Heist\n<:dg_arrow:1168074869414563860> **Donor**: ${interaction.user}\n<:dg_arrow:1168074869414563860> **Amount**: ${amount}\n<:dg_arrow:1168074869414563860> **Requirements**: ${requirement}\n<:dg_arrow:1168074869414563860> **Message:** ${message}`)
        .setThumbnail(`https://media.tenor.com/vb7oSAu2Dd4AAAAM/jschlatt.gif`)
        .setFooter({ text: `Thank you for donating <3` })
    
    
    await interaction.reply({ content: `<@&1156833537740259389>`, embeds: [em] })
    }
  },
};