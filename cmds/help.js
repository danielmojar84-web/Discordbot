export default {
  name: 'help',
  description: 'Show all commands or info about one command.',
  role: 'Everyone',
  author: 'System',
  usage: '!help [page|command]',
  aliases: ['h'],
  delay: 3,

  async run(client, message, args) {
    const commands = Array.from(client.commands.values());
    const perPage = 7;

    if (args[0] && isNaN(args[0])) {
      const cmd = client.commands.get(args[0]);
      if (!cmd) return message.reply('❌ Command not found.');
      return message.reply(
        `**${cmd.name}**\nDescription: ${cmd.description}\nUsage: ${cmd.usage}\nRole: ${cmd.role}\nAliases: ${cmd.aliases.join(', ')}`
      );
    }

    let page = parseInt(args[0]) || 1;
    const totalPages = Math.ceil(commands.length / perPage);
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const list = commands.slice(start, end)
      .map(cmd => `**${cmd.name}** — ${cmd.description}`)
      .join('\n');

    message.reply(`📘 **Help (Page ${page}/${totalPages})**\n${list}\n\nUse \`!help <command>\` for more info.`);
  }
};
