'use strict'

const TradingApi = require('poloniex-api').tradingApi;
const tradingApi = TradingApi.create("", "");

const Seller = {

  sell : (parametros) => {

    return new Promise((resolve, reject) => {

      tradingApi.sell(parametros)
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
          respuesta        : 'Error al intentar vender'
        });

      });

    })

  }

};

module.exports = Seller;
