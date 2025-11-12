export default {
  name: 'serverinfo',
  description: 'Displays information about this server.',
  role: 'Everyone',
  author: 'System',
  usage: '!serverinfo',
  aliases: ['sinfo'],
  delay: 3,

  async run(client, message) {
    const guild = message.guild;
    message.reply(
      `🏰 **Server Info**\nName: ${guild.name}\nMembers: ${guild.memberCount}\nOwner: <@${guild.ownerId}>\nCreated: <t:${Math.floor(guild.createdTimestamp / 1000)}:R>`
    );
  }
};
