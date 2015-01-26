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
	goodbyeText: 'Go build awesome stuff!',
	sections: [
		{
			title: 'What are Modules?',
			subtitle: 'a brief refresher',
			slides: [
				{
					title: 'this is not a module.'
					, background: {
						image: 'swissArmy_1.jpg'
					}
					, image: {
						attribution: 'Swiss Army Knife by Basheer Tome | CC BY 2.0'
					}
					, classes: 'invert--header'
				},
				{
					title: 'But that doesn\t look so bad...'
				},
				{
					title: 'yeah...'
					, background: {
						image: 'swissArmy_2.jpg'
					}
					, image: {
						attribution: 'Swiss Army Knife by Dave Taylor | CC BY 2.0'
					}
					, classes: 'invert--header'
				},
				{
					title: 'this...'
					, background: {
						image: 'swissArmy_3.jpg'
					}
					, image: {
						attribution: 'The ultimate Swiss Army Knife for sale in Interlaken by redjar | CC BY 2.0'
					}
					, classes: 'invert--header'
				},
				{
					uniqueContent: '...is where you inevitably end up.'
				},
				{
					title: ' '
					, background: {
						image: 'tools.jpg'
					}
					, image: {
						attribution: 'photo by Todd Quackenbush'
						, class: 'image__attribution--invert'
					}
				},
				{
					title: 'this is what we want'
					, background: {
						image: 'tools.jpg'
					}
					, classes: 'invert--header'
					, image: {
						attribution: 'photo by Todd Quackenbush'
						, class: 'image__attribution--invert'
					}
				}
			]
		},
		{
			title: 'Use All The Modules',
			subtitle: 'composing modules for fun and profit',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '<p>You can add more sections and slides inside of <span class="code">src/data.js</span>.</p>'
				}
			]
		},
		{
			title: 'Creating Independent Modules',
			subtitle: 'git that stuff outta here',
			slides: [
				{
					title: 'How do I know this is the right time?'
				},
				{
					background: {
						image: 'sprint.gif'
					}
				},
				{
					title: 'There are general rules, but it is partly a feel thing'
				},
				{
					uniqueContent: '\
						<blockquote  class="quote--block" cite="http://www.haskellcast.com/episode/002-don-stewart-on-real-world-haskell/">\
							"The general rule that we have is if you use something twice, move it out of any application specific code..."\
							<footer class="attribution">Don Stewart (Real World Haskell)</footer>\
						</blockquote>',
					classes: 'quote'
				},
				{
					uniqueContent: '\
						<blockquote  class="quote--block" cite="http://www.haskellcast.com/episode/002-don-stewart-on-real-world-haskell/">\
							"The general rule is: if you use something twice, move it out of any application specific context"\
						</blockquote>',
					classes: 'quote'
				},
				{
					title: 'So Let\'s Pull out a Module'
				}
			]
		},
		{
			title: 'The npm Workflow',
			subtitle: 'git that stuff outta here',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '<p>You can add more sections and slides inside of <span class="code">src/data.js</span>.</p>'
				}
			]
		}
	]
};
