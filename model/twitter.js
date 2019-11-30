const web3 = require('../config/web3.config');
const abiTwitter = require('../contracts/abiTwitter');
const addressContract = "0x28f818930Df6f1a72DE52FA51f0CD284b077BcFa";

const twitter = new web3.eth.Contract(abiTwitter, addressContract);
var addressUserAccount;

web3.eth.getAccounts().then(function (result) {
    addressUserAccount = result[0]
    console.log(addressUserAccount);
});

module.exports = twitter;

