// import { isMainThread } from 'worker_threads';
// import { AssertionError } from 'assert';

const StarNotary = artifacts.require('StarNotary');

let accounts;
let owner;

contract('StarNotary', accs => {
  accounts = accs;
  owner = accounts[0];
});

it('has correct name', async () => {
  const instance = await StarNotary.deployed();
  const starName = await instance.starName.call();
  assert.equal(starName, 'Shitty Udacity Star.');
});
