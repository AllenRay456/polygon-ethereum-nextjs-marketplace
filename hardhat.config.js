require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      // url: "https://rpc-mumbai.matic.today",
      url: "https://polygon-mumbai.infura.io/v3/4c6ab311f61749c087a62d58ca91f1b3",
      accounts: [process.env.privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      // url: "https://rpc-mainnet.maticvigil.com",
      url: "https://polygon-mainnet.infura.io/v3/4c6ab311f61749c087a62d58ca91f1b3",
      accounts: [process.env.privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

