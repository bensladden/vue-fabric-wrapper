const webpack = require('webpack')
const { version } = require('../../package.json')
module.exports = {
	title: 'Vue-Fabric-Wrapper Docs',
	description: 'Welcome to Vue-Fabric-Wrapper Docs',
	markdown: {
		lineNumbers: true,
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /fabric(\.min)?\.js$/,
					use: "exports-loader?fabric"
				}
			]
		},
		node: {
			global: true
		},
		externals: ['canvas']
	},
	chainWebpack: (config) => {
		config.plugin('version-env').use(webpack.EnvironmentPlugin, [
			{
				VERSION: version,
			},
		])
	},
	themeConfig: {
		repo: 'bensladden/vue-fabric-wrapper',
		repoLabel: 'GitHub',
		docsDir: 'docs',
		docsBranch: 'master',
		lastUpdated: 'Last Updated',
		sidebarDepth: 2,
		nav: [
			{
				text: 'Guide',
				items: [
					{ text: 'Getting Started', link: '/guide/#getting-started' },
					{ text: 'Setup', link: '/guide/#setup' },
					{ text: 'How to Use with Vue', link: '/guide/#how-to-use-in-vue' },
					{ text: 'How to use with Nuxt', link: '/guide/#how-to-use-in-nuxt' },
					{ text: 'Support', link: '/guide/#show-your-support' },
					{ text: 'Contributing', link: '/guide/#contributing' },
					{ text: 'Bug Report', link: '/guide/#bug-report' }
				]
			}, {
				text: 'API',
				items: [
					{ text: 'Canvas', link: '/api/#canvas-component' },
					{ text: 'Object', link: '/api/#fabric-objects' },
					{ text: 'Circle', link: '/api/#circle-component' },
					{ text: 'Ellipse', link: '/api/#ellipse-component' },
					{ text: 'Group', link: '/api/#group-component' },
					{ text: 'ImageFromURL', link: '/api/#image-from-url-component' },
					{ text: 'Line', link: '/api/#line-component' },
					{ text: 'Path', link: '/api/#path-component' },
					{ text: 'Polygon', link: '/api/#polygon-component' },
					{ text: 'Polyline', link: '/api/#polyline-component' },
					{ text: 'Rectangle', link: '/api/#rectangle-component' },
					{ text: 'SVGFromURL', link: '/api/#svg-from-url-component' },
					{ text: 'Triangle', link: '/api/#triangle-component' },
					{ text: 'Gradients', link: '/api/#gradient-component' },
					{ text: 'Animations', link: '/api/#animation-component' },
					{ text: 'Shadows', link: '/api/#shadow-component' },

				]
			}, {
				text: 'Examples',
				items: [
					{ text: "StickMan", link: '/examples/#stick-man' },
					{ text: "Dot Snappable Grid", link: '/examples/#Dot-Snappable-Grid' }
				]
			}
		]
	},
	plugins: ['@vuepress/last-updated']
}