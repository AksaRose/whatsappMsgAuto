function whatbot(client) {
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  console.log("Whatsappbot running...")

  client.once('ready',() =>{
    console.log('Client is ready!');
  });

  client.on('message_create', async (message) => {
    const prompt = message.body;

    if (message.fromMe) return;
    try {
      let chat = await message.getChat();
      if (!chat.isGroup) {
        if (prompt.toLowerCase() === 'hey') {
          await message.reply('heyyy');
        } else {
          await run(message, prompt);
        }
      }
    } catch (error) {
      console.error('Error with API:', error);
      await message.reply('I will get back with you asap');
    }
  });
  
  async function run(message, prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello, I have 2 dogs in my house." }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = await response.text();
    await message.reply(text);
  }
 
  client.initialize();  
}

module.exports = whatbot;