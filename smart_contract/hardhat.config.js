// https://eth-ropsten.alchemyapi.io/v2/M3pt84AWLoKF_zhpGATg5VI0fjzV8XoD

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/M3pt84AWLoKF_zhpGATg5VI0fjzV8XoD',
      accounts: [ '38545bf9d1409b375c12e5eabb94f238066a6240d8a7873a5ab47e2d09946189' ]
    }
  }
}
