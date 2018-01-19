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
        })
      })
      .catch(err => {
        return reject({
          response: 'Error when trying to sell'
        })
      })
  })
}

module.exports.buy = (parameters,credentials) => {
  return new Promise((resolve, reject) => {
    const trading = tradingApi(credentials)
    trading.buy(parameters)
      .then( data => {
        return resolve({
          response: JSON.parse(data.body)
        })
      })
      .catch( err => {
        return reject({
          response: 'Error when trying to buy'
        })
      })
  })
}

module.exports.returnBalances = async (credentials) => {
  return new Promise((resolve, reject) => {
    const trading = tradingApi(credentials)
    trading.returnBalances()
      .then( data => {
        return resolve({
          response: JSON.parse(data.body)
        })
      })
      .catch( err => {
        return reject({
          response: 'Error when getting balances'
        })
      })
  })
}

module.exports.returnCompleteBalances = async (credentials) => {
  return new Promise((resolve, reject) => {
    const trading = tradingApi(credentials)
    trading.returnCompleteBalances()
      .then( data => {
        return resolve({
          response: JSON.parse(data.body)
        })
      })
      .catch( err => {
        return reject({
          response: 'Error when getting balances'
        })
      })
  })
}

module.exports.returnOpenOrders = async (currencyPair, credentials) => {
  return new Promise((resolve, reject) => {
    const trading = tradingApi(credentials)
    trading.returnOpenOrders(currencyPair)
      .then( data => {
        return resolve({
          response: JSON.parse(data.body)
        })
      })
      .catch( err => {
        return reject({
          response: 'Error when getting OpenOrders'
        })
      })
  })
}

module.exports.cancelOrder = async (orderNo, credentials) => {
  return new Promise((resolve, reject) => {
    const trading = tradingApi(credentials)
    trading.cancelOrder(orderNo)
      .then( data => {
        return resolve({
          response: JSON.parse(data.body)
        })
      })
      .catch( err => {
        return reject({
          response: 'Error when cancel order number: '+orderNo
        })
      })
  })
}

module.exports.returnOrderBook = async (currencyPair) => {
  const axios = require('axios')
  try {
    const orderBook = await axios.get('https://poloniex.com/public?command=returnOrderBook&currencyPair='+currencyPair)
    return orderBook.data
  } catch (err) {
    return err
  }
}

module.exports.determinePriceCurrency = (currencyPair, type, volume) => {
  const _ = require('lodash')
  return new Promise((resolve, reject) => {
    this.returnOrderBook(currencyPair)
      .then(data => {
        const typeOrder = type === 'buy' ? 'asks' : 'bids'
        if(data[typeOrder] === undefined)
          reject({ error: 'No contain data for '+currencyPair})
        const filters = _.filter(data[typeOrder], (item) =>{
          return item[1] >= volume
        })
        const result = _.minBy(filters, (min) =>  min[1] )
        console.log('parametros', currencyPair, type, volume)
        console.log('tipoOrden',typeOrder)
        console.log('data[]', data[typeOrder])
        console.log('filters',filters)
        console.log('result', result)        
        resolve(result[0])
      })
      .catch( err => {
        reject(err)    
      })
  })
}