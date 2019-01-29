const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');
const web3 = new Web3('http://127.0.0.1:8545');
const fromAddress = '0x7608e8e059e21e10eacfdeede75d84b926a77cda';
const toAddress = '0x54e5acebae205f59b5c7af3f8d7d1cc3f2c3a56a';

web3.eth.getBalance(fromAddress).then(console.log);
web3.eth.getBalance(toAddress).then(console.log);

const rawTransaction = {
  nonce: 0,
  to: receivingAddress,
  gasPrice: 20000000,
  gasLimit: 3000,
  value: 1,
  data: '',
};
