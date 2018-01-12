'use strict'
const Seller = require('../Trader/Seller.js');
const logger = require('../utils/Logger');

const parametros = {
    'currencyPair' : 'BTC_ETH',
    'amount'       : 0.008,
    'rate'         : 0.058
}

const promise = Seller.sell(parametros);
promise.then(data => {
  logger.info(data);
}, err => {
  logger.error(err);
})
