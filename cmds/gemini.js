import fetch from 'node-fetch';

export default {
  name: 'gemini',
  description: 'Chat with Gemini AI continuously.',
  role: 'Everyone',
  author: 'System',
  usage: '!gemini <message>',
  aliases: ['gm'],
  delay: 5,

  async run(client, message, args) {
    const prompt = args.join(' ');
    if (!prompt) return message.reply('💬 Please provide a question or message.');

    const apiKey = process.env.GEMINI_KEY;
    if (!apiKey) return message.reply('⚠️ Gemini API key missing.');

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );
      const data = await response.json();
      const output = data?.candidates?.[0]?.content?.parts?.[0]?.text || '❌ No response.';
      message.reply(output.slice(0, 1900)); // Discord message limit safety
    } catch (e) {
      console.error(e);
      message.reply('❌ Error contacting Gemini API.');
    }
  }
};
