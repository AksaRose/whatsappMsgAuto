const {Client} = require ('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
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

client.on('message_create', (message,chat) => {
    
    if(chat.isGroup === false && message.fromMe === false) {
    
         if(message.body === 'Hey' || message.body === 'hey' ){
            message.reply('hey, aksa here!!');
        }
    };
    
});

client.initialize();
