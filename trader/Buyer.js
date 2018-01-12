'use strict'

const TradingApi = require('poloniex-api').tradingApi;
const tradingApi = TradingApi.create("I7JZE7RO-CMGT6FZG-D40UVJ07-C6WJ486D", "e9f4de47603e23e02bb580efdaae278e2e7b46027a8222859fbc9df7677c40e520599abb6694755a72acec9bed98f2240b118c0e6ebf260007efae941935987f");

const Buyer = {

  buy : (parametros) => {

    return new Promise((resolve, reject) => {

      tradingApi.buy(parametros)
      .then( data => {

          if(data.statusCode == 200){

            return resolve({
              codigo_respuesta : true,
              respuesta        : JSON.parse(data.body)
            });

          }else{

            return reject({
              codigo_respuesta : false,
              respuesta        : JSON.parse(data.body)
            });

          }

      }, err => {

        return reject({
          codigo_respuesta : false,
          respuesta        : 'Error al intentar comprar'
        });

      });

    })

  }

};

module.exports = Buyer;
