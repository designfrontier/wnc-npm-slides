var express = require('express')
	, app = express()
	, server

	, translate = require('./translate');

app.get('/', function (req, res) {
	res.send(translate.translate('Hello', req.query.lang) + '. ' + translate.translate('Welcome to class', req.query.lang) + '.');
});

server = app.listen(1337, function () {
	var host = server.address().address
		, port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port)
});