const Web3 = require('web3');  
// import Web3 from 'web3';
const customProvider = {
    sendAsync: (pl, cb) => {
        console.log('you called')
        console.log(pl)
        cb(undefined,100)
    }
}
// const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(customProvider);
// const web3 = new Web3('http://localhost:8545');
// connected to the blockchain

web3.eth.getBlockNumber().then(() => console.log('done!'));
