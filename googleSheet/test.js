const { getData } = require('./googleSheet.js');

(async () => {
  const resp = await getData('<docID>', '<sheetID>');
  console.log(resp);
})();