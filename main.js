/*const {Client} = require ('whatsapp-web.js');
const qrcode = require('qrcode-terminal');*/
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {

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

  const msg = "How many paws are in my house?";

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();



/*const client = new Client({
    webVersion: "2.2409.4-beta",
    webVersionCache: {
      type: "remote",
      remotePath:
        "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2409.4-beta.html",
    },
  });
client.once('ready',() =>{
    console.log('Client is ready!');
});

client.on('qr',(qr)=>{
    qrcode.generate(qr, {small: true}); 
});

client.on('message_create', async (message) => {
    // Ignore messages from the bot itself
    if (message.fromMe) return;
  
    try {
      
  
      // Check if the message is from a personal chat
      if (!chat.isGroup) {
        const prompt = message.body;
  
        // Check if the message body is 'Hey' or 'hey'
        if (message.body.toLowerCase() === 'hey') {
          await message.reply('hey, aksa here!!');
        } else {

        }
      }
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      await message.reply('Sorry, there was an error processing your request.');
    }
  });
  
  client.initialize();*/