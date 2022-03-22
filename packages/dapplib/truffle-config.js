require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remember erosion grace gloom system twelve'; 
let testAccounts = [
"0xb18b87ba59dc071c80d10e0da3ca59053f864ba9c06ee2ae2bd12fbc282e8052",
"0x4669278cc4caf82c8ea827c201eecc07c78d979c22ea0c0decb6681a03f6957b",
"0x9df9b3adf17b639c0dc6230e9efbba37d0a99972dbe9b8cfb435f50b00502e78",
"0x891f5f38fd84c7aa166f0c7e4d7cadb66bd418302d91ec0fa80ef5105af9f366",
"0xa8ef58eb00ce1dd7a7f62e245c8f3d1a01a08a63c0a63a43e82678ff6449efa3",
"0x832b702bebf27918d8cf633faaa39bc9ff2eaf7789d0f461dc2572153c71637a",
"0x100ac87f7ee76e175bd42dfa6646ed4d835f4f661d020e57ae0cecbedb061f0a",
"0xd2768be06b206e3dd3852bbac01f6d1c0e38fd7c32716a72abb0e9464899ca66",
"0x033f8b986b5db8d2d61d611370a25a9d89da26d788958f32d45e3806341419ee",
"0xb8fcc04e370f49b941db03a1052b55dbe74b643485044498a50661cb46d4a8d6"
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
            version: '^0.8.0'
        }
    }
};

