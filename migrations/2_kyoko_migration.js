const Kyoko = artifacts.require("Kyoko");
const Configuration = artifacts.require("Configuration");

const fs = require('fs');
const saveData = require('../fsUtil');

const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const configStr = fs.readFileSync('../deploy.json');
const deployConfig = JSON.parse(configStr);
const lenderTokenAddress = deployConfig.lenderToken;


module.exports = async function (deployer, network, accounts) {
  const [account] = accounts;
  console.log('account', account);

  await deployer.deploy(Configuration);

  await deployer.link(Configuration, Kyoko);

  console.log("deploy Kyoko proxy start");
  await deployProxy(Kyoko, [lenderTokenAddress],
    { deployer, initializer: 'initialize', overwrite: true, unsafeAllow: ["external-library-linking"] });
  console.log("deploy Kyoko proxy done");

  const kyokoAddress = Kyoko.address;
  saveData('kyokoProxy', kyokoAddress);

  console.table({
    kyokoProxy: kyokoAddress
  });

  console.log("❤⭕");
};
