const Web3 = require('web3');
const fs = require('fs');
const Kyoko = artifacts.require("Kyoko");

//add a new designated ERC20 Token to the white list
const configStr = fs.readFileSync('../deploy.json');
const deployConfig = JSON.parse(configStr);
const assetTokenAddress = deployConfig.assetToken;
const USDT = assetTokenAddress;


module.exports = async function (deployer, network, accounts) {
    const [account] = accounts;

    const kyoko = await Kyoko.deployed();
    await kyoko.updateWhiteList(USDT, true);

    console.log("updateWishList success:" + USDT);
};    