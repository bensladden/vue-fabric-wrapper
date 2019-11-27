const webpack = require('webpack')
const { version } = require('../../package.json')
module.exports = {
	title: 'Vue-Fabric-Wrapper Docs',
	description: 'Welcome to Vue-Fabric-Wrapper Docs',
	markdown: {
		lineNumbers: true,
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
					{ text: 'Getting Started', link: '/guide/getting-started' },
					{ text: 'Installation', link: '/guide/installation' },
					{ text: 'Nuxt Example', link: '/guide/nuxt-example' },
				]
			}, {
				text: 'API',
				items: [
					{ text: 'FabricCanvas', link: '/api/canvas' },
					{ text: 'FabricObject', link: '/api/objects' },
					{ text: 'FabricCircle', link: '/api/circle' },
					{ text: 'FabricEllipse', link: '/api/ellicpse' },
					{ text: 'FabricGroup', link: '/api/group' },
					{ text: 'FabricImageFromURL', link: '/api/image-from-url' },

				]
			}
		],
		// sidebar: [{
		// 	title: 'Introduction',
		// 	children: ["/"]
		// }]
	},
	plugins: ['@vuepress/last-updated']
}