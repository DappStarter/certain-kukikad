require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth punch pulp harvest force flip gate'; 
let testAccounts = [
"0xe8289986c0dd5a5fe6f5efe080cf8dc6e7b3b240433e63d8809941b4e7f6f9e6",
"0xc171317823b8a1dd9451821789d8200dade9beea8c3b4225705f17a4421e514c",
"0xf880e1756009205a2aee3e76441edcc8c8b173738b627740bd12d10234a17e2f",
"0x0793ebc3222ef2c606c1a5f6fc75a5e4e40b9d90c6ca9e8399933fbf5d69ae1a",
"0x77b62157836e89a9a6fba62179aa3d967fe93f3e08112047d9eb24dd76994b22",
"0x2e198a1b620b7ebf70b02c29070419a05abe016c59510ca40f1f86a3344259de",
"0x24bd8320bfe0f2612bfc81f2ef1e6f7e9f68ff578954bb9ef1913d141fdd4639",
"0x8bce28f3b430a7a6a0c9b75303ecaceb871a2e71e8a78484588131b53e2173d0",
"0xf45372fb53be2335aabed6a9dbc801d678e70979708bb38ee899131a2061cef8",
"0xc0a965ec8f55ecf42a34b20851830909f95c705a129e25a208c9930d28c05212"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
