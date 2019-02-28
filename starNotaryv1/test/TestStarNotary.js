const StarNotary = artifacts.require('StarNotary');

var accounts;
var owner;

contract('StarNotary', accs => {
  accounts = accs;
  owner = accounts[0];
});
