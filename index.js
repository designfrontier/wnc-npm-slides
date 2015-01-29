var express = require('express')
	, app = express()
	, server

	, getTranslation = function (string, language) {
		var translationDictionary = {
			'Hello': {
				es: 'Hola'
				, du: 'Guten tag'
				, ja: '今日は'
			}
			, 'welcome to class': {
				es: 'bienvenidos a la clase'
				, du: 'willkommen in der Klasse'
				, ja: 'クラスへの歓迎'
			}
		}

		return translationDictionary[string][language] || string;
	};

app.get('/', function (req, res) {
	res.send(getTranslation('Hello', req.query.lang) + ', ' + getTranslation('welcome to class', req.query.lang));
});

server = app.listen(1337, function () {
	var host = server.address().address
		, port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port)
});