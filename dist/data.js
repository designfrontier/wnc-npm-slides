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
					title: 'What\'s out there?',
					uniqueContent: '<p>120,900+ Pacakges are on npm.</p><p><code>underscore.js</code> had over 3.7 million downloads last month.'
				}
				, {
					title: 'How do I use them?'
				}
				, {
					title: 'first you find them'
					, background: {
						image: 'haystack.jpg'
					}
					, classes: 'invert--header'
					, image: {
						attribution: 'Hay stacks and Automobiles by Bill & Vicki T | CC BY 2.0'
						, class: 'image__attribution--invert'
					}
				}
				, {
					title: 'Then it\'s easy'
					, uniqueContent: '<code>npm install --save module-name-here</code>'
				}
				, {
					title: 'If it\'s a dev tool'
					, uniqueContent: '<code>npm install --save-dev module-name-here</code>'
				}
				, {
					title: 'In practice'
					, uniqueContent: '<pre><code>\n\nvar _ = require(\'underscore\')\n   , stooges = [\n        {name: \'moe\', age: 40}\n      , {name: \'larry\', age: 50}\n      , {name: \'curly\', age: 60}\n   ];\n\n\n_.max(stooges, function (stooge) { return stooge.age });\n\n</code></pre>'
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
					, uniqueContent: 'but first let\'s talk about...'
				}
			]
		},
		{
			title: 'The npm Workflow',
			subtitle: 'git that stuff outta here',
			slides: [
				{
					title: 'Give it a home and a name',
					uniqueContent: '<p>Create a new git repo and folder structure for your module. Don\'t forget your package.json (<code>npm init</code> will lay down a base for you).</p>'
				}
				, {
					title: '<code>npm link</code>',
					uniqueContent: '<p>THE tool for linking local packages for development</p>'
				}
				, {
					title: '<code>npm link packageName</code>',
					uniqueContent: '<p>set up the link to your new local module</p>'
				}
				, {
					title: '<code>npm install -g .</code>',
					uniqueContent: '<p>Test that it packages correctly</p>'
				}
				, {
					title: '<code>npm version {major|minor|patch}</code>',
					uniqueContent: '<p>Let npm handle your versioning and tagging automagically</p>'
				}
				, {
					title: '<code>npm publish</code>',
					uniqueContent: '<p>release it to the world!</p>'
				}
				, {
					title: 'So...',
					uniqueContent: '<ol class="code__list"><li><code>npm link</code></li><li><code>npm link packageName</code></li><li><code>npm install -g .</code></li><li><code>npm version</code></li><li><code>npm publish</code></li></ol>'
				}
				, {
					title: 'Example Time...'
				}
			]
		}
	]
};
