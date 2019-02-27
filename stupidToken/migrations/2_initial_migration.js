const StupidToken = artifacts.require('StupidToken');

module.exports = function(deployer) {
  deployer.deploy(StupidToken, 'StupidFuckingToken', 'UET', 18, 1000);
};
