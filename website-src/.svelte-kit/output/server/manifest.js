export const manifest = {
	appDir: "_app",
	assets: new Set(["discord.svg","favicon.png","github.svg","global.css","reddit.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-7e2c6456.js","imports":["_app/immutable/start-7e2c6456.js","_app/immutable/chunks/index-9fe779a0.js","_app/immutable/chunks/singletons-db1ba40f.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
