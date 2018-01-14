'use strict'

const logger = require('@stacksavings/utils').log()
const client = require('./poloniex-client')

/*const currencies = client.currenciesAvailable()
currencies.then(data => {
  logger.info(data);
}, err => {
  logger.error(err);
})*/

let parameters = {
  currencyPair: 'BTC_ETH',
  amount: 0.008,
  rate: 0.058,
}
let credentials = {
  key: '',
  secret: ''
}

const seller = client.buy(parameters,credentials)
seller.then(data => {
  logger.info(data);
}, err => {
  seller.error(err);
})
