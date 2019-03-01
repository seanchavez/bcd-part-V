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
