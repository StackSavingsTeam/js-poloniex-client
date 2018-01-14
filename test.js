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
  key: 'I7JZE7RO-CMGT6FZG-D40UVJ07-C6WJ486D',
  secret: 'e9f4de47603e23e02bb580efdaae278e2e7b46027a8222859fbc9df7677c40e520599abb6694755a72acec9bed98f2240b118c0e6ebf260007efae941935987f'
}

const seller = client.buy(parameters,credentials)
seller.then(data => {
  logger.info(data);
}, err => {
  seller.error(err);
})
