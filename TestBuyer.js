'use strict'
const Buyer  = require('../Trader/Buyer.js');
const logger = require('../utils/Logger');

const parametros = {
    'currencyPair' : 'BTC_ETH',
    'amount'       : 0.008,
    'rate'         : 0.058
}

const promise = Buyer.buy(parametros);
promise.then(data => {
  logger.info(data);
}, err => {
  logger.error(err);
})
