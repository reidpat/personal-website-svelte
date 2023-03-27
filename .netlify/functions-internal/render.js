const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["Boids/Boid.js","Boids/quadtree.js","Boids/sketch.js","MeFun.png","MeFun.webp","MeSerious.png","MeSerious.webp","WebBuild/Build/WebBuild.data.gz","WebBuild/Build/WebBuild.framework.js.gz","WebBuild/Build/WebBuild.loader.js","WebBuild/Build/WebBuild.wasm.gz","WebBuild/TemplateData/favicon.ico","WebBuild/TemplateData/fullscreen-button.png","WebBuild/TemplateData/progress-bar-empty-dark.png","WebBuild/TemplateData/progress-bar-empty-light.png","WebBuild/TemplateData/progress-bar-full-dark.png","WebBuild/TemplateData/progress-bar-full-light.png","WebBuild/TemplateData/style.css","WebBuild/TemplateData/unity-logo-dark.png","WebBuild/TemplateData/unity-logo-light.png","WebBuild/TemplateData/webgl-logo.png","WebBuild/index.html","assets/Death Typer.gif","assets/DeathTyper Screens.jpg","assets/EvolvingCyborgs.jpg","assets/ML_Agents_scene.png","assets/Pro-DHub(OLD).jpg","assets/Pro-D_Hub.png","assets/TechTracker.jpg","assets/arduino robot.jpg","assets/code_icon.png","assets/construction.png","assets/dndDice.png","assets/evolving_cyborgs/Habitica_Daily_Checkoff.png","assets/evolving_cyborgs/Habitica_Daily_Checkoff_Punishment.png","assets/evolving_cyborgs/drawing1.png","assets/evolving_cyborgs/drawing2.jpg","assets/evolving_cyborgs/drawing3.jpg","assets/evolving_cyborgs/drawing4.jpg","assets/evolving_cyborgs/drawing5.jpg","assets/evolving_cyborgs/drawing6.jpg","assets/evolving_cyborgs/evolving-cyborgs-mobile.png","assets/evolving_cyborgs/evolving_cyborgs_concept.jpg","assets/evolving_cyborgs/updatedApp.png","assets/evolving_cyborgs/webb.png","assets/humane tech.png","assets/meditation.png","assets/obsidian-icon.png","assets/pedagogy.png","assets/ukulele.png","assets/unity_ml/ML_Agents_scene.png","assets/unity_ml/Unity Lab 2.gif","assets/unity_ml/Unity Lab 3.gif","assets/unity_ml/Unity Lab 6.gif","chip.jpg","chip2.jpg","favicon.png","home.png","lights.jpg","lights2.jpg","pandoc-2.18-windows-x86_64.msi","q5.js","q5.min.js","sketch.js","sky.jpeg","space (large).jpg","space.jpg","space.webp"]),
	mimeTypes: {".js":"application/javascript",".png":"image/png",".webp":"image/webp",".gz":"application/gzip",".ico":"image/vnd.microsoft.icon",".css":"text/css",".html":"text/html",".gif":"image/gif",".jpg":"image/jpeg",".msi":"application/octet-stream",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-77cab5e5.js","js":["start-77cab5e5.js","chunks/index-a27d9349.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
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
			},
			{
				type: 'page',
				id: "portfolio",
				pattern: /^\/portfolio\/?$/,
				names: [],
				types: [],
				path: "/portfolio",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "sanctuaryai",
				pattern: /^\/sanctuaryai\/?$/,
				names: [],
				types: [],
				path: "/sanctuaryai",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "portfolio/arduino",
				pattern: /^\/portfolio\/arduino\/?$/,
				names: [],
				types: [],
				path: "/portfolio/arduino",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "portfolio/deathtyper",
				pattern: /^\/portfolio\/deathtyper\/?$/,
				names: [],
				types: [],
				path: "/portfolio/deathtyper",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "portfolio/evolvingcyborgs",
				pattern: /^\/portfolio\/evolvingcyborgs\/?$/,
				names: [],
				types: [],
				path: "/portfolio/evolvingcyborgs",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "portfolio/pro-dhub",
				pattern: /^\/portfolio\/pro-dhub\/?$/,
				names: [],
				types: [],
				path: "/portfolio/pro-dhub",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "portfolio/techtracker",
				pattern: /^\/portfolio\/techtracker\/?$/,
				names: [],
				types: [],
				path: "/portfolio/techtracker",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "portfolio/unityml",
				pattern: /^\/portfolio\/unityml\/?$/,
				names: [],
				types: [],
				path: "/portfolio/unityml",
				shadow: null,
				a: [0,10],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
