'use strict'
const api = require('./poloniex-client')
api.determinePriceCurrency('BTC_NXT', 'buy', 333)
.then(res =>{
    console.log(res)
}, err =>{
    console.log(err)
})