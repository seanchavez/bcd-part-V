const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');
const web3 = new Web3('http://127.0.0.1:8545');
const fromAddress = '0x7608e8e059e21e10eacfdeede75d84b926a77cda';
const toAddress = '0x54e5acebae205f59b5c7af3f8d7d1cc3f2c3a56a';

web3.eth.getBalance(fromAddress).then(console.log);
web3.eth.getBalance(toAddress).then(console.log);

const rawTx = {
  nonce: 0,
  to: toAddress,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: 1,
  data: '',
};

const pkSender =
  'a92b2638fc904ed7a3823f9cfb3138e56818ba468ee07189dc88e14b3018e1f7';
const pkSenderBuffer = new Buffer.alloc(32, pkSender, 'hex');
tx = new EthereumTx(rawTx);
tx.sign(pkSenderBuffer);

const serializedTx = tx.serialize();
web3.eth.sendSignedTransaction(serializedTx);

web3.eth.getBalance(fromAddress).then(console.log);
web3.eth.getBalance(toAddress).then(console.log);
