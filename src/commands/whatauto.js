function whatauto(client) {
  console.log("auto running");

const fs = require('fs').promises;
const path = require('path');
const { google } = require('googleapis');


const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');


/**
 * Load the service account key file and return the authenticated client.
 */
async function authorize() {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const credentials = JSON.parse(content);

  const client = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
  );

  return client;
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function listMajors(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: '1elUy7f_NpONOnRAry612GbZDTTwrd8KxEkt3zfVMP5E',
    range: 'Sheet1!E2:E',
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }
  else {
    sendmes(rows);
  }

  async function sendmes(rows) {

  client.once('ready',() =>{
      console.log('Client is ready!');
      rows.forEach((row) => {
        if (row[0].length === 12){
        const phno = `${row[0]}@c.us`;
        client.sendMessage(phno,"test:This, message is being sent from automated system")
        .then(console.log("message has been send"))
        }
        else {
          const phno = `91${row[0]}@c.us`;
        client.sendMessage(phno,"test:This, message is being sent from automated system")
        .then(console.log("message has been send"))
        }
        
      });
  });

  }

}

authorize().then(listMajors).catch(console.error);
client.initialize();
}
module.exports = whatauto;
