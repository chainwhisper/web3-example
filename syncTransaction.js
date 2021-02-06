const Web3 = require('web3');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')

// Variables definition
const privKey =''; // Genesis private key
const addressFrom = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const addressTo = '0x44236223aB4291b93EEd10E4B511B37a398DEE55'; // Change addressTo

// Create transaction
const deploy = async () => {
   console.log(
      `Attempting to make transaction from ${addressFrom} to ${addressTo}`
   );

   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: addressFrom,
         to: addressTo,
         value: web3.utils.toWei('1', 'ether'),
         gas: 21000,
      },
      privKey
   );

   // Deploy transaction
   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`
   );
};

deploy();