const request = require('request');
const w3hexschool_API_URL = 'https://raw.githubusercontent.com/hexschool/w3hexschool-API/master/data.json'
module.exports = function (keyID) {
    return new Promise((resolve, reject) => {
        request.get({ 'url': w3hexschool_API_URL }, (error, response) => {
            if (error) reject(new Error(error));
            resolve(response);
        });
    });
}