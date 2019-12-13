const ethers = require('ethers');

let provider = ethers.getDefaultProvider('ropsten');
let mnemonic = 'swap clap myth quantum beach record artwork surge nose office patch solid'//"gauge cushion fun clarify render symbol hidden absurd seven sand idle apart casino easily track"

let path = "m/44'/60'/0'/0/0"; //"m/44'/60'/0'/0/"	
let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic,path);
mnemonicWallet.provider = provider;

console.log('wordlist===>', mnemonicWallet);