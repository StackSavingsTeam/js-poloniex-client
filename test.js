'use strict'

const logger = require('@stacksavings/utils').log()
const client = require('./poloniex-client')

const currencies = client.currenciesAvailable()
currencies.then(data => {
  logger.info(data);
}, err => {
  logger.error(err);
})
return
let parameters = {
  currencyPair: 'BTC_ETH',
  amount: 0.008,
  rate: 0.058,
}
let credentials = {
  key: '90NIRFQJ-BP27VWL6-M52RFCB3-Q2OS9B49',
  secret: 'c676c5ac9e7d82200c679e78568d6461856a7c150a6bedca1178753cde439d9d5aa7d3822043a69f309d9a3cb543593a302a8c26e16674150ae4f84d7812475c'
}

const seller = client.buy(parameters,credentials)
seller.then(data => {
  logger.info(data);
}, err => {
  seller.error(err);
})
