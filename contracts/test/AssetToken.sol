// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";


contract AssetToken is ERC20Upgradeable,OwnableUpgradeable {

    uint8 private _decimals;

    uint256 private betaAmountPer;


    function initialize(string memory _name, string memory _symbol, uint8 decimals_) public initializer {
        __ERC20_init(_name, _symbol);
        __Ownable_init();
        _decimals = decimals_;
        betaAmountPer = 10000 * 10 ** _decimals;
    }

    function decimals() public view virtual override returns (uint8) {
        // return 6;
        return _decimals;
    }
    
    function mint(address _to, uint256 _amount) public {
        require(_amount <= betaAmountPer, "amount too much");
        _mint(_to, _amount);
    }


    function updateBetaAmount(uint256 _amount) public onlyOwner {
        betaAmountPer = _amount;
    }


    function betaVersionV2() public pure returns(uint256) {
        return 1;
    }
}