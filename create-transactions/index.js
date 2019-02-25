const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545');

web3.eth
  .getTransactionCount('0x1978b8fe79ebf4d52fca363e395992f34f4c1a45')
  .then(console.log);

// const Web3 = require('web3');
// const EthereumTx = require('ethereumjs-tx');
// const web3 = new Web3(
//   'https://mainnet.infura.io/v3/cf9e60827ece40c79e3c8206dcdf8f52',
// );
// const fromAddress = '0x7608e8e059e21e10eacfdeede75d84b926a77cda';
// const toAddress = '0x54e5acebae205f59b5c7af3f8d7d1cc3f2c3a56a';

// web3.eth.getBalance(fromAddress).then(console.log);
// web3.eth.getBalance(toAddress).then(console.log);

// const rawTx = {
//   nonce: 0,
//   to: toAddress,
//   gasPrice: 20000000,
//   gasLimit: 30000,
//   value: 1,
//   data: '',
// };

// const pkSender =
//   'a92b2638fc904ed7a3823f9cfb3138e56818ba468ee07189dc88e14b3018e1f7';
// const pkSenderBuffer = new Buffer.alloc(32, pkSender, 'hex');
// tx = new EthereumTx(rawTx);
// tx.sign(pkSenderBuffer);

// const serializedTx = tx.serialize();
// web3.eth.sendSignedTransaction(serializedTx);

// web3.eth.getBalance(fromAddress).then(console.log);
// web3.eth.getBalance(toAddress).then(console.log);

// web3.eth.getGasPrice().then(console.log);
// web3.eth.getUncle(500, 0).then(console.log);
// web3.eth
//   .getBlockTransactionCount('0x407d73d8a49eeb85d32cf465507dd71d507100c1')
//   .then(console.log);
