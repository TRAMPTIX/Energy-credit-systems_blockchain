const Web3 = require('web3');
const contract = require('@truffle/contract');
const EnergyMarketplaceArtifact = require('../build/contracts/EnergyMarketplace.json');

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const EnergyMarketplace = contract(EnergyMarketplaceArtifact);
EnergyMarketplace.setProvider(web3.currentProvider);

const buyCredits = async (account, amount) => {
    try {
        const instance = await EnergyMarketplace.deployed();
        const price = web3.utils.toWei((amount * 0.01).toString(), 'ether');
        await instance.buyCredits(amount, { from: account, value: price });
        console.log(`Successfully purchased ${amount} energy credits.`);
    } catch (error) {
        console.error('Error purchasing credits:', error);
    }
};

const account = process.argv[2];
const amount = process.argv[3];

if (!account || !amount) {
    console.error('Usage: node buyCredits.js <account> <amount>');
    process.exit(1);
}

buyCredits(account, amount);
