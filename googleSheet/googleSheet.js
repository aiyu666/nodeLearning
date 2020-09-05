const { GoogleSpreadsheet } = require('google-spreadsheet');

/**
 * @param  {String} docID the document ID
 * @param  {String} sheetID the google sheet table ID
 * @param  {String} credentialsPath the credentials path defalt is './credentials.json'
 */
async function getData(docID, sheetID, credentialsPath = './credentials.json') {
  const result = [];
  const doc = new GoogleSpreadsheet(docID);
  const creds = require(credentialsPath);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetID];
  const rows = await sheet.getRows();
  for (row of rows) {
    result.push(row._rawData);
  }
  return result;
};

/**
 * @param  {Array} data the data whitch will transfer to object
 * @param  {Array} spliceRange the range which you want to splice
 * @return {Object} the result which transfer complete
 */
function transferDataToObject(data, spliceRange) {
  const result = {};
  for (targetData of data) {
    targetData.splice(spliceRange[0], targetData.length + spliceRange[0] - targetData.length);
    targetData.reverse();
    targetData.splice(0, targetData.length - spliceRange[1]);
    targetData.reverse();
    result[targetData[0]] = targetData.splice(1);
  }
  return result;
}

module.exports = {
  getData,
  transferDataToObject,
};

