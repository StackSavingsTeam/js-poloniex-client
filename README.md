<p align="center">
  <img src="https://lh3.googleusercontent.com/-kuZK_9RjH3Q/WluTIhi6yWI/AAAAAAAAAa4/3-lNezXWLEM6E2GZjJ7VC2Bn1YJ-tIYewCJoC/w530-h117-n/stacksavings.png" alt="" width=370 height=80>
  </br>
  <a href="https://site.stacksavings.com/" target="_black"><strong>Visit our homepage »</strong></a>
</p>

# Stacksavings - Poloniex Client

Hemos creado un paquete <b>"@stacksavings/poloniex-client"</b> para poder usar los metodos de Public y Trading API de Poloniex.

## Table of contents

- [Installing](#Installing)
- [Usage](#Installing)
- [Public API Methods](#Installing)
- [Trading API Methods](#Installing)

## Getting Started

### Installing
Para poder instalar el cliente solo basta con ejecutar el comando:
```
npm i @stacksavings/poloniex-client
```
### Usage
Para empezar a usarlo solo debe de incluirlo en tu código asi:
```
const client = require('@stacksavings/poloniex-client')
```
### Public API Methods

* <b>currenciesAvailable:</b>

<p>&nbsp;&nbsp;&nbsp;&nbsp;Returns information about currencies.</p>
&nbsp;&nbsp;&nbsp;&nbsp;<b>Example to call it:</b>

```
const logger = require('@stacksavings/utils').log()
const client = require(@stacksavings/poloniex-client)
const currencies = client.currenciesAvailable()

currencies.then(data => {
  logger.info(data);
}, err => {
  logger.error(err);
})
```
&nbsp;&nbsp;&nbsp;&nbsp;<b>Output:</b>
```
{
  "1CR":{
         "maxDailyWithdrawal":10000,
         "txFee":0.01,
         "minConf":3,
         "disabled":0
        },
  "ABY":{
         "maxDailyWithdrawal":10000000,
         "txFee":0.01,
         "minConf":8,
         "disabled":0
        },
   ...
}
```

### Trading API Methods
Estos métodos requieren el <b>"Key"</b> y <b>"Secret"</b> asociado a la organización Stacksavings.
</br>

* <b>buy:</b>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Coloca una orden de compra límite en un mercado determinado. Los parámetros necesarios son "currencyPair", "rate" y "amount". Si tiene éxito, el método devolverá el número de orden.</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>Example to call it:</b>

```
const logger = require('@stacksavings/utils').log()
const client = require(@stacksavings/poloniex-client)

let parameters = {
  currencyPair: 'BTC_ETH',
  amount: 0.008,
  rate: 0.058,
}
let credentials = {
  key: 'KEY STRING',
  secret: 'SECRET STRING'
}

const buyer = client.buy(parameters,credentials)
buyer.then(data => {
  logger.info(data);
}, err => {
  logger.error(err);
})
```
&nbsp;&nbsp;&nbsp;&nbsp;<b>Output:</b>
```
{
  "orderNumber":31226040,
  "resultingTrades":[
                     {
                      "amount":"338.8732",
                      "date":"2014-10-18 23:03:21",
                      "rate":"0.00000173",
                      "total":"0.00058625",
                      "tradeID":"16164",
                      "type":"buy"
                     }
                    ]
}
```

* <b>sell:</b>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Coloca una orden de venta en un mercado determinado. Los parámetros necesarios son "currencyPair", "rate" y "amount". Si tiene éxito, el método devolverá el número de orden.</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>Example to call it:</b>

```
const logger = require('@stacksavings/utils').log()
const client = require(@stacksavings/poloniex-client)

let parameters = {
  currencyPair: 'BTC_ETH',
  amount: 0.008,
  rate: 0.058,
}
let credentials = {
  key: 'KEY STRING',
  secret: 'SECRET STRING'
}

const seller = client.sell(parameters,credentials)
buyer.then(data => {
  logger.info(data);
}, err => {
  logger.error(err);
})
```
&nbsp;&nbsp;&nbsp;&nbsp;<b>Output:</b>
```
{
  "orderNumber":31226040,
  "resultingTrades":[
                     {
                      "amount":"338.8732",
                      "date":"2014-10-18 23:03:21",
                      "rate":"0.00000173",
                      "total":"0.00058625",
                      "tradeID":"16164",
                      "type":"sell"
                     }
                    ]
}
```
