'use strict'
const api = require('./poloniex-client')

let credentials = {
  key: '',
  secret: ''
}

api.returnCompleteBalances(credentials)
.then(res =>{
    console.log(res)
}, err =>{
    console.log(err)
})
