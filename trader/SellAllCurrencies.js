'use strict'

const Seller = require('../Trader/Seller.js'); //aca llamamos al modulo para ventas
const logger = require('../utils/Logger'); //lamada al modulo de logs

const TradingApi = require('poloniex-api').tradingApi;
const tradingApi = TradingApi.create("I7JZE7RO-CMGT6FZG-D40UVJ07-C6WJ486D", "e9f4de47603e23e02bb580efdaae278e2e7b46027a8222859fbc9df7677c40e520599abb6694755a72acec9bed98f2240b118c0e6ebf260007efae941935987f");

const CurrenciesAvailable = require('../DataCollection/CurrenciesAvailablePoloniex');

/* Descripcion
El objetivo es obtener los cod currencie y con estos obtener los balances por cada codigo
 si el saldo (BTC) es mayor a cero , se podra realizar la venta.
 por el momento solo se podran efectuar 2 ventas por cada una disponible 

 */




    const data = CurrenciesAvailable.getCurrenciesFromPoloniex();
    
    data.then(data => {
   logger.info(data)
  
    //iterando cada currencie obtenida
    for (var clave in data) {
        //por cada currencie se hace la llamada al metodo para obtener el balance de esta
        tradingApi.returnBalances(clave, function(err, data) {
            //en caso de error
            if (err) {
                console.log(err);
            }
            //si todo resulta bien obtenemos el balance 
            else {
                //el metodo nos devuelve un json del balance
                var contador = 0;
                for (var i in data) {
                    //verificamos que el btc del json sea mayor a cero
                    //y para la prueba verificamos que solo se puedan realizar dos ventas
                    if (data[i]['BTC'] > 0 && contador < 3) {
                        //procedemos a realizar la venta
                        //esta retorna una promesa y la ejecuta
                        var promise = Seller.sell(data[i]);
                        promise.then(data => {
                            console.log("Sell realizada con exito");
                            logger.info(data);
                            contador = contador + 1;
                        }, err => {
                            logger.error(err);
                        })

                    }

                }
            }
        });
    }
  
  
}, err => {
  logger.error(err)
});




