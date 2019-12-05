const web3 = require('../config/web3.config');
require("dotenv").config();
const abi = require('../contracts/twitter.abi');
const addressContract = process.env.ADDRESS_CONTRACT;

const twitterContract = new web3.eth.Contract(abi.abiTwitter, addressContract);

const userAddress = web3.eth.getAccounts().then(result => {
    console.log("User address: " + result[0]);  
    
    return result[0];
});

module.exports = {
    twitterContract,
    userAddress
}



