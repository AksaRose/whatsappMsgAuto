const whatbot = require('./commands/whatbot.js');
const whatauto = require('./commands/whatauto.js');
const readlineSync = require('readline-sync');

console.log("===============================================================================================");

console.log("Welocme to Admin Panel. What do you want to do?");
console.log("1. run whatsapp bot");
console.log("2. automate whatsapp message");

let choice = readlineSync.question("Enter your choice: ");
switch(choice){
    case "1": {
        whatbot();
        break;
    }
    case "2": {
        whatauto();
        break;
    }
}