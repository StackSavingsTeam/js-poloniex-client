# Stacksavings - Poloniex Client

Hemos creado un paquete "@stacksavings/poloniex-client" para poder usar los metodos de Public y Trading API de Poloniex.

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

### Trading API Methods

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

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
