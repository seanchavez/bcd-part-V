const Web3 = require('web3');

const url = 'https://rinkeby.infura.io/v3/cf9e60827ece40c79e3c8206dcdf8f52';

const web3 = new Web3(url);

const address = '0x104afa98fbd407c28e7336988d9fff9378c36b36';

web3.eth.getBalance(address, (err, bal) => {
  const eth = web3.utils.fromWei(bal, 'ether');
  console.log(eth);
});
