const LenderToken = artifacts.require("LenderToken");

const fs = require('fs');
const saveData = require('../fsUtil');

module.exports = async function (deployer, network, accounts) {
  const [account] = accounts;
  console.log('account', account);

  console.log("deploy LenderToken start");
  // await deployer.deploy(
  //   LenderToken
  // );
  await deployProxy(LenderToken, [],
    { deployer, initializer: 'initialize', overwrite: false });

  console.log("deploy LenderToken done");
  const lenderTokenAddress = LenderToken.address;


  //first step, clear the previous deploy file
  fs.rmSync('./deploy.json', { force: true }, console.error);
  saveData('lenderToken', lenderTokenAddress);

  console.table({
    lenderToken: lenderTokenAddress
  });

  console.log("❤⭕");
};
