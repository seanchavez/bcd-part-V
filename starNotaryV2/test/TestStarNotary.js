const StarNotary = artifacts.require('StarNotary');

let accounts;
let owner;

contract('StarNotary', accs => {
  accounts = accs;
  owner = accounts[0];
});

it('can create a star', async () => {
  const tokenId = 1;
  const instance = await StarNotary.deployed();
  await instance.createStar('Shitty Star', tokenId, { from: owner });
  assert.equal(await instance.tokenIdToStarInfo.call(tokenId), 'Shitty Star');
});

it('lets user1 put their star up for sale', async () => {
  const instance = await StarNotary.deployed();
  const user1 = accounts[1];
  const starId = 2;
  const starPrice = web3.utils.toWei('.01', 'ether');
  await instance.createStar('Shitty Star', starId, { from: user1 });
  await instance.putStarUpForSale(starId, starPrice, { from: user1 });
  assert.equal(await instance.starsForSale.call(starId), starPrice);
});

it('lets user1 get the funds after the sale', async () => {
  const instance = await StarNotary.deployed();
  const user1 = accounts[1];
  const user2 = accounts[2];
  const starId = 3;
  const starPrice = web3.utils.toWei('.01', 'ether');
  const balance = web3.utils.toWei('.05', 'ether');
  await instance.createStar('Shitty Star', starId, { from: user1 });
  await instance.putStarUpForSale(starId, starPrice, { from: user1 });
  const balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user1);
  await instance.buyStar(starId, { from: user2, value: balance });
  const balanceOfUser1AfterTransaction = await web3.eth.getBalance(user1);
  const value1 = Number(balanceOfUser1BeforeTransaction) + Number(starPrice);
  const value2 = Number(balanceOfUser1AfterTransaction);
  assert.equal(value1, value2);
});

it('lets user2 buy a star, if it is put up for sale', async () => {
  const instance = await StarNotary.deployed();
  const user1 = accounts[1];
  const user2 = accounts[2];
  const starId = 4;
  const starPrice = web3.utils.toWei('.01', 'ether');
  const balance = web3.utils.toWei('.05', 'ether');
  await instance.createStar('Shitty Star', starId, { from: user1 });
  await instance.putStarUpForSale(starId, starPrice, { from: user1 });
  await instance.buyStar(starId, { from: user2, value: balance });
  assert.equal(await instance.ownerOf.call(starId), user2);
});

it('lets user2 buy a star and decreases its balance in ether', async () => {
  const instance = await StarNotary.deployed();
  const user1 = accounts[1];
  const user2 = accounts[2];
  const starId = 5;
  const starPrice = web3.utils.toWei('.01', 'ether');
  const balance = web3.utils.toWei('.05', 'ether');
  await instance.createStar('awesome star', starId, { from: user1 });
  await instance.putStarUpForSale(starId, starPrice, { from: user1 });
  const balanceOfUser2BeforeTransaction = await web3.eth.getBalance(user2);
  await instance.buyStar(starId, { from: user2, value: balance, gasPrice: 0 });
  const balanceAfterUser2BuysStar = await web3.eth.getBalance(user2);
  const value =
    Number(balanceOfUser2BeforeTransaction) - Number(balanceAfterUser2BuysStar);
  assert.equal(value, starPrice);
});
