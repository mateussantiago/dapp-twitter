const web3 = require('../config/web3.config');
const abi = require('../contracts/twitter.abi');
const addressContract = "0xF1CF211f11e4F63082B4B62CF6ed4E6929d11f37";

const twitterContract = new web3.eth.Contract(abi.abiTwitter, addressContract);

const userAddress = web3.eth.getAccounts().then(result => {
    console.log("User address: " + result[0]);    
    
    return result[0];
});

module.exports = {
    twitterContract,
    userAddress
}



