const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["Boids/Boid.js","Boids/quadtree.js","Boids/sketch.js","MeFun.png","MeFun.webp","MeSerious.png","MeSerious.webp","chip.jpg","chip2.jpg","favicon.png","lights.jpg","lights2.jpg","pandoc-2.18-windows-x86_64.msi","q5.js","q5.min.js","sketch.js","sky.jpeg","space (large).jpg","space.jpg","space.webp"]),
	mimeTypes: {".js":"application/javascript",".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".msi":"application/octet-stream",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-72442f7c.js","js":["start-72442f7c.js","chunks/index-03d1660a.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
