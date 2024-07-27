const whatbot = require('./commands/whatbot.js');
const whatauto = require('./commands/whatauto.js');
const reportauto = require('./commands/reportauto.js');
const readlineSync = require('readline-sync');
const {Client} = require ('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('dotenv').config();

const client = new Client({
    webVersion: "2.2409.4-beta",
    webVersionCache: {
      type: "remote",
      remotePath:
        "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2409.4-beta.html",
    },
  });
  client.on('qr',(qr)=>{
    qrcode.generate(qr, {small: true}); 
});

console.log("===============================================================================================");

console.log("Welocme to Admin Panel. What do you want to do?");
console.log("1. run whatsapp bot");
console.log("2. automate whatsapp message");
console.log("3. automate report");

let choice = readlineSync.question("Enter your choice: ");
switch(choice){
    case "1": {
        whatbot(client);
        break;
    }
    case "2": {
        whatauto(client);
        break;
    }
    case "3": {
        reportauto();
        break;
    }
}