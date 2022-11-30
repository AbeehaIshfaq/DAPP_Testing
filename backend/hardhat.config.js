require("@nomicfoundation/hardhat-toolbox");

//require("@nomiclabs/hardhat-ethers")
const dotenv = require("dotenv");
dotenv.config({path:".env"});

 const RINKEBY_RPC_URL = 'https://goerli.infura.io/v3/404f5e8f74d741c9be12cf95aa81a782'; 

 const PRIVATE_KEY = '4f7a793f9974e90936c3b7017f20085a3f4fcc785175969dab9c60b9e78f1a2e' 

 module.exports = {
     defaultNetwork: "Goerli",
     networks: {
         hardhat: {
             // // If you want to do some forking, uncomment this
             // forking: {
             // url: MAINNET_RPC_URL
             // }
         },
         localhost: {
         },
         Goerli: {
             url: RINKEBY_RPC_URL,
             accounts: [`0x${PRIVATE_KEY}`],
             saveDeployments: true,
         },
     },

  solidity: "0.8.9",
};