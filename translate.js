var getTranslation = function (string, language) {
		var translationDictionary = {
			'Hello': {
				es: 'Hola'
				, du: 'Guten tag'
				, ja: '今日は'
			}
			, 'Welcome to class': {
				es: 'Bienvenidos a la clase'
				, du: 'Willkommen in der Klasse'
				, ja: 'クラスへの歓迎'
			}
		}

		return translationDictionary[string][language] || string;
	};

module.exports = {translate: getTranslation};