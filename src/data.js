// ================================================================================
// DATA
// ================================================================================

'use strict';

// Global context for Handlebars templates in `src/templates`
var data = {
	// ------------------------------------------
	// CUSTOMIZE BELOW
	// ------------------------------------------
	social: {
		twitter: 'daniel_sellers',
		github: 'designfrontier',
		profile: 'http://photos-h.ak.instagram.com/hphotos-ak-xpf1/t51.2885-15/10755899_365394280313935_633423439_n.jpg',
		name: 'Daniel Sellers'
	},
	theme: {
		mainColor: '#231C27',
		specialTransition: 'zoom'
	},
	title: 'Modularize All the Things!',
	subtitle: 'Getting to know the npm workflow',
	greetingText: '',
	goodbyeText: 'This is goodbye text!',
	sections: [
		{
			title: 'This is the 1st section',
			subtitle: 'This is a subtitle',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: 'this is a slide'
				},
				{
					title: 'This is the 2nd slide',
					uniqueContent: '<p>This is a paragraph.</p>'
				},
				{
					title: 'This is the 3rd slide',
					uniqueContent: 'This is a <strong>strong</strong> element.'
				},
				{
					title: 'This is the 4th slide',
					uniqueContent: 'This is slide 4!!!'
				},
				{
					title: 'This is the 5th slide',
					uniqueContent: '<iframe class="stretch" src="//www.youtube.com/embed/XQu8TTBmGhA" frameborder="0" allowfullscreen></iframe>'
				},
				{
					title: 'This is the 6th slide',
					uniqueContent: '\
						<blockquote>\
							"This is a quoteblock." - Some cool dude.\
						</blockquote>'
				}
			]
		},
		{
			title: 'This is the 2nd section',
			subtitle: 'This is a subtitle',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '<p>You can add more sections and slides inside of <span class="code">src/data.js</span>.</p>'
				}
			]
		}
	]
};
