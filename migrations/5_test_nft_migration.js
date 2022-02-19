// test nft
const TestNFT = artifacts.require("TestNFT");

const fs = require('fs');
const saveData = require('../fsUtil');

module.exports = async function (deployer, network, accounts) {
  const [account] = accounts;
  console.log('account', account);

  console.log("deploy TestNFT start");
  await deployer.deploy(
    TestNFT
  );
  console.log("deploy TestNFT done");
  const testNFTAddress = TestNFT.address;

  saveData('testNFT', testNFTAddress);

  console.table({
    testNFT: testNFTAddress
  });

  console.log("❤⭕ test NFT deploy success.");
};
