const Web3 = require('web3');
const fs = require('fs');
const Kyoko = artifacts.require("KyokoP2P");

//add a new designated ERC20 Token to the white list
const configStr = fs.readFileSync('../deploy.json');
const deployConfig = JSON.parse(configStr);
const assetTokenAddress = deployConfig.assetToken;
const USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";


module.exports = async function (deployer, network, accounts) {
    const [account] = accounts;

    const kyoko = await Kyoko.deployed();
    await kyoko.updateWhiteList(USDT, true);

    console.log("updateWishList success:" + USDT);
};    