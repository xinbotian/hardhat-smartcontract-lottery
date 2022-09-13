require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{
      chainId:31337,
      blockConfirmations: 1,
    },
    rinkeby:{
      chainId: 4,
      blockConfirmations: 6,
      url: ,
      accounts: [PRIVATE_KEk]
    }
  },
  solidity: "0.8.9",
  namedAccounts:{
    deployer:{
      defaut: 0,
    },
    player:{
      default: 1,
    },
  },
};
