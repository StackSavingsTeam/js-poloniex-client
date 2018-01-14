'use strict'

function tradingApi(credentials){
  const TradingApi = require('poloniex-api').tradingApi;
  const tradingApi = TradingApi.create(credentials.key, credentials.secret);
  return tradingApi
}

module.exports.currenciesAvailable = async () => {
  const axios = require('axios')
  try {
    const currencies = await axios.get(`https://poloniex.com/public?command=returnCurrencies`)
    return currencies.data
  } catch (err) {
    return err
  }
}

module.exports.returnChartData = async (parameters) => {
  const axios = require('axios')
  try {
    const ChartData = await axios.get(`https://poloniex.com/public?command=returnChartData&currencyPair=${parameters.currencyPair}&start=${parameters.start}&end=${parameters.end}&period=${parameters.period}`)
    return ChartData.data
  } catch (err) {
    return err
  }
}

module.exports.sell = (parameters,credentials) => {
  return new Promise((resolve, reject) => {
    const trading = tradingApi(credentials)
    trading.sell(parameters)
    .then( data => {
      return resolve({
        response: JSON.parse(data.body)
      });
    }, err => {
      return reject({
        response: 'Error when trying to sell'
      });
    });
  })
}

module.exports.buy = (parameters,credentials) => {
  return new Promise((resolve, reject) => {
    const trading = tradingApi(credentials)
    trading.buy(parameters)
    .then( data => {
      return resolve({
        response: JSON.parse(data.body)
      });
    }, err => {
      return reject({
        response: 'Error when trying to buy'
      });
    });
  })
}
