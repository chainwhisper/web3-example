
const Web3 = require('web3');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')

const Common = require('ethereumjs-common').default;
var Tx = require('ethereumjs-tx').Transaction;

const customCommon = Common.forCustomChain(
  'mainnet',
  {
    name: 'bsc',
    networkId: web3.utils.toHex(97),
    chainId: web3.utils.toHex(97),
  },
  'petersburg',
)


// Variables definition
//const privKey = '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';
const addressFrom = 'from address';
const addressTo = 'to address';


// Create transaction
var privateKey = Buffer.from('private key', 'hex');

var rawTx = {
  nonce: web3.utils.toHex(0),
  gasLimit: web3.utils.toHex(25000),
  gasPrice: web3.utils.toHex(20000000000),
  from: addressFrom,
  to: addressTo,
  value: '0x10',
  data: '0x0'
}

var tx = new Tx(rawTx,{ common: customCommon })
tx.sign(privateKey);

var serializedTx = tx.serialize();

console.log(serializedTx.toString('hex'));

web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
.on('receipt', console.log);
