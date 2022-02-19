const AssetToken = artifacts.require("AssetToken");
const saveData = require('../fsUtil');
const fs = require('fs');
const name = "Tether USD";
const symbol = "USDT";
const decimal = "6";

module.exports = async function (deployer, network, accounts) {
  const [account] = accounts;
  console.log('account', account);

  console.log("deploy AssetToken start");
  await deployer.deploy(
    AssetToken,
    { overwrite: true }
  );
  console.log("deploy AssetToken done");
  const assetTokenAddress = AssetToken.address;

  const asset = await AssetToken.deployed();
  await asset.initialize(name, symbol, decimal);

  saveData('assetToken', assetTokenAddress);

  console.table({
    assetToken: assetTokenAddress
  });

  console.log("❤⭕");
};
