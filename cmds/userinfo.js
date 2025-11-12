export default {
  name: 'userinfo',
  description: 'Displays information about a user.',
  role: 'Everyone',
  author: 'System',
  usage: '!userinfo [@user]',
  aliases: ['uinfo'],
  delay: 3,

  async run(client, message) {
    const user = message.mentions.users.first() || message.author;
    message.reply(
      `👤 **User Info**\nName: ${user.username}\nID: ${user.id}\nCreated: <t:${Math.floor(user.createdTimestamp / 1000)}:R>`
    );
  }
};
