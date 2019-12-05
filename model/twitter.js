const web3 = require('../config/web3.config');
const abi = require('../contracts/twitter.abi');
const addressContract = "0x8A40d0d6fFa4f382769370242e299F5127A21bB5";

const twitterContract = new web3.eth.Contract(abi.abiTwitter, addressContract);

const userAddress = web3.eth.getAccounts().then(result => {
    console.log("User address: " + result[0]);  
    
    return result[0];
});

module.exports = {
    twitterContract,
    userAddress
}



