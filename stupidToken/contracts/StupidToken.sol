pragma solidity >=0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract StupidToken is ERC20Detailed, ERC20 {
    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint _initialSupply)
    ERC20Detailed(_name, _symbol, _decimals) public {
        require(_initialSupply > 0, "INITIAL_SUPPLY has to be greater than zero");
        _mint(msg.sender, _initialSupply);
    }
}