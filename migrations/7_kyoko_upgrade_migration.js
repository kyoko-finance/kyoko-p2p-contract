const fs = require('fs');

// const Kyoko = artifacts.require('Kyoko');
const KyokoV2 = artifacts.require('KyokoP2P');

const { prepareUpgrade, upgradeProxy } = require('@openzeppelin/truffle-upgrades');


// const configStr = fs.readFileSync('../deploy.json');
// const deployConfig = JSON.parse(configStr);
const kyokoProxyAddress = "";//deployConfig.kyokoProxy

module.exports = async function (deployer) {

    await prepareUpgrade(kyokoProxyAddress, KyokoV2,
        { deployer });
    kyokoV2Result = await upgradeProxy(kyokoProxyAddress, KyokoV2,
        { deployer, initializer: 'initialize' });

    console.log("kyokoV2:" + this.kyokoV2Result.address);

};