// import { isMainThread } from 'worker_threads';
// import { AssertionError } from 'assert';

const StarNotary = artifacts.require('StarNotary');

let accounts;
let owner;
let secondUser;

contract('StarNotary', accs => {
  accounts = accs;
  owner = accounts[0];
  secondUser = accounts[1];
});

it('has correct name', async () => {
  const instance = await StarNotary.deployed();
  const starName = await instance.starName.call();
  assert.equal(starName, 'Shitty Udacity Star.');
});

it('can be claimed', async () => {
  const instance = await StarNotary.deployed();
  await instance.claimStar({ from: owner });
  const starOwner = await instance.starOwner.call();
  assert.equal(starOwner, owner);
});

it('can change owners', async () => {
  const instance = await StarNotary.deployed();
  await instance.claimStar({ from: owner });
  let starOwner = await instance.starOwner.call();
  assert.equal(starOwner, owner);
  await instance.claimStar({ from: secondUser });
  const secondOwner = await instance.starOwner.call();
  assert.equal(secondOwner, secondUser);
});
