var express = require('express')
	, app = express()
	, server

	, lang = require('wnc-lang-daniel');

app.get('/', function (req, res) {
	res.send(lang.translate('Hello', req.query.lang) + '. ' + lang.translate('Welcome to class', req.query.lang) + '.');
});

server = app.listen(1337, function () {
	var host = server.address().address
		, port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port)
});