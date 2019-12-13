const HDWalletProvider = require("@truffle/hdwallet-provider");

//docs config- https://github.com/trufflesuite/truffle/tree/develop/packages/hdwallet-provider
const twelvewordprivatekeys = [
  '0xeb2635630b2071efcf0e4d4f51fea74668d753f6df2e9454162917312b58826b',
  '0x90e3225dd714579b553ce6f33a4ec81ebaf6b0d38c880d2a348574ecc669d156'
]
const privateKeys = [ //for 15 words
  '0xd3fe7f9ee929a80d4ed9b3729ee1c7cb682c93dad43defe8a32cac19dbb45713',
  '0x34ce1926cfa01afe5640b209b156cb0796626fac72ddc8a0019eb237d3667e22',
  '0xea574c4e5b10dbb98b306e7e9621a97947b13c1803203569f0dec2f1a113cf2b'
]
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        //12 word for metamask- 'swap clap myth quantum beach record artwork surge nose office patch solid'
        const mnemonic = "gauge cushion fun clarify render symbol hidden absurd seven sand idle apart casino easily track";
        return new HDWalletProvider(twelvewordprivatekeys, "https://ropsten.infura.io/v3/cbb25294ae1a42de850bd50222f71781", 0, 2);
      },
      network_id: 3
    }
  }
};
