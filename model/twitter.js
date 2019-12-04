const web3 = require('../config/web3.config');
const abi = require('../contracts/twitter.abi');
const addressContract = "0x955a7264bd216C266bA7497bc5eEb839EdB26a86";

const twitterContract = new web3.eth.Contract(abi.abiTwitter, addressContract);

const userAddress = web3.eth.getAccounts().then(result => {
    console.log("User address: " + result[0]);  
    
    return result[0];
});

module.exports = {
    twitterContract,
    userAddress
}



