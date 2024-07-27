function reportauto() {
    console.log("reportauto running..");

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
  const ranges = ['Sheet1!G2:G', 'Sheet1!I2:I', 'Sheet1!K2:K', 'Sheet1!M2:M'];
  const res = await sheets.spreadsheets.values.batchGet({
    spreadsheetId: '1Wo4DfIQ_U7J_xuZq5LHMjSvyCrudyoGB014cRkb5WWo',
    ranges: ranges,
  });
  const rowsG = res.data.valueRanges[0].values || [];
  const rowsI = res.data.valueRanges[1].values || [];
  const rowsK = res.data.valueRanges[2].values || [];
  const rowsM = res.data.valueRanges[3].values || [];

  if (!rowsG || rowsG.length === 0) {
    console.log('No data found.');
    return;
  }
  console.log('G, I, K, M:');
    for (let i = 0; i < rowsG.length; i++) {
      // Only print values that are not null or undefined
      const g = rowsG[i][0] || '';
      const iValue = rowsI[i] ? rowsI[i][0] : '';
      const k = rowsK[i] ? rowsK[i][0] : '';
      const m = rowsM[i] ? rowsM[i][0] : '';

      const output = [g, iValue, k, m].filter(value => value !== '').join(', ');
      if (output) {
        console.log(output);
      }
    }
 

}
authorize().then(listMajors).catch(console.error);
}
  module.exports = reportauto;
  