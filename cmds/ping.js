export default {
  name: 'ping',
  description: 'Check bot latency.',
  role: 'Everyone',
  author: 'System',
  usage: '!ping',
  aliases: ['latency'],
  delay: 2,

  async run(client, message) {
    const sent = await message.reply('🏓 Pinging...');
    sent.edit(`🏓 Pong! Latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
  }
};
