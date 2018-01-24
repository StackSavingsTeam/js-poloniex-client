const assert = require('chai').assert
const api = require('./poloniex-client')

<<<<<<< HEAD
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
=======
describe('Test poloniex api public', async () => {
	it('Should be return currencies in a object', () => {
		const currenciesAvailable = api.currenciesAvailable()
		currenciesAvailable.then( currencies =>{
			assert.isObject(currencies)
		}).catch( err =>{
		})	
	})

	it('Should be return Chart data as object and not empty', () => {
		const params = { 
			currencyPair: 'BTC_LTC',
			period: 14400,
			start: 1513569600,
			end: 1513656000 
		}
		const chartData = api.returnChartData(params)
		chartData.then( chart =>{
			assert.isNotEmpty(chart)
		}).catch(err =>{
		})
	})

	it('Should be return order book for all currencies', () => {
		const ordersBook = api.returnOrderBook('all')
		ordersBook.then( orders =>{
			assert.isObject(orders)
		}).catch( err =>{
		})	
	})
})
>>>>>>> a9e289843af4dbb4bb9e773e17ed0672fadfe55e
