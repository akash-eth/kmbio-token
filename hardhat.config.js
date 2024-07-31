require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-solhint");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("solidity-coverage");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
    },
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL || "",
      accounts:
        process.env.ADMIN_WALLET_PRIVATE_KEY !== undefined
          ? [process.env.ADMIN_WALLET_PRIVATE_KEY]
          : [],
      gas: "auto",
    },
    sepolia: {
      url: process.env.SEPOLIA_TESTNET_RPC_URL || "",
      accounts:
        process.env.ADMIN_WALLET_PRIVATE_KEY !== undefined
          ? [process.env.ADMIN_WALLET_PRIVATE_KEY]
          : [],
      gas: "auto",
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: process.env.POLYGON_API_KEY,
      bscTestnet: process.env.BSC_API_KEY,
      polygon: process.env.POLYGON_API_KEY,
      mainnet: process.env.ETHERSCAN_API_KEY,
    },
  },
  mocha: {
    timeout: 80000,
  },
};
