const fs = require('fs');
const Kyoko = artifacts.require("KyokoP2P");
const LenderToken = artifacts.require("LenderToken");

const configStr = fs.readFileSync('../deploy.json');
const deployConfig = JSON.parse(configStr);
const lenderTokenAddress = deployConfig.lenderToken;
const kyokoProxyAddress = deployConfig.kyokoProxy;
const assetTokenAddress = deployConfig.assetToken;
const testNFTAddress = deployConfig.testNFT;


module.exports = async function (deployer, network, accounts) {
  const [account] = accounts;

  console.log("grant kyoko mint LenderToken start");
  const kyoko = await Kyoko.deployed();
  const lenderToken = await LenderToken.deployed();
  console.log("lenderTokenAddress:", lenderToken);
  // await lenderToken.transferOwnership(kyoko.address);
  const ROLE_MINTER = await lenderToken.ROLE_MINTER();
  await lenderToken.grantRole(ROLE_MINTER, kyoko.address);
  console.log("grant kyoko mint LenderToken done");


  console.table({
    lenderToken: lenderTokenAddress,
    kyokoProxy: kyokoProxyAddress,
    assetToken: assetTokenAddress,
    testNFT: testNFTAddress
  });

  console.log("❤⭕ All deployment tasks are completed.");
};    