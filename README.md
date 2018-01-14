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
const client = require(@stacksavings/poloniex-client)
const currencies = client.currenciesAvailable()

currencies.then(data => {
  console.log(data);
}, err => {
  console.log(err);
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
  console.log(data);
}, err => {
  console.log(err);
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







## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
