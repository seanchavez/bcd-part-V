const Web3 = require('web3');

const url = 'https://mainnet.infura.io/v3/cf9e60827ece40c79e3c8206dcdf8f52';

const web3 = new Web3(url);

const address = '0x53d284357ec70cE289D6D64134DfAc8E511c8a3D';

web3.eth.getBalance(address, (err, bal) => {
  const eth = web3.utils.fromWei(bal, 'ether');
  console.log(eth);
});
