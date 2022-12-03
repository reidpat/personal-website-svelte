var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../chunks/index-6b489d84.js");
var import_Contact_8a18bbeb = require("../../chunks/Contact-8a18bbeb.js");
var import_svelte_gestures = require("svelte-gestures");
var Hero_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".hero-content.svelte-1mnusvb{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0, 0, 0, 0.4);box-shadow:0 0 1rem 0 rgba(255, 255, 255, 0.2);width:50%;max-width:800px;min-width:250px}.btn.svelte-1mnusvb{flex-shrink:2;width:150px;margin:10px auto}")();
const css$6 = {
  code: ".hero-content.svelte-1mnusvb{backdrop-filter:blur(5px);background-color:rgba(0, 0, 0, 0.4);box-shadow:0 0 1rem 0 rgba(255, 255, 255, 0.2);width:50%;max-width:800px;min-width:250px}.btn.svelte-1mnusvb{flex-shrink:2;width:150px;margin:10px auto}",
  map: null
};
const Hero = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div id="${"home"}" class="${"section hero min-h-screen bg-base-200 min-w-screen"}"><div class="${"hero-content text-center rounded p-10 svelte-1mnusvb"}"><div class="${"max-w-md"}"><p class="${"text-xl font-semibold text-slate-100"}">Hi, I&#39;m</p>
			<h1 class="${"text-5xl font-bold gradient-text"}">Reid Patterson</h1>
			<p class="${"text-xl p-4 text-slate-100"}">Tinkerer / Developer / Educator.</p>
			<div class="${"flex flex-col m-auto"}"><button class="${"btn glow-on-hover m-auto uppercase svelte-1mnusvb"}">About Me</button>
                <button class="${"btn glow-on-hover m-auto uppercase svelte-1mnusvb"}">Portfolio</button>
				<button class="${"btn glow-on-hover m-auto uppercase svelte-1mnusvb"}">Media</button></div></div></div>
</div>`;
});
const Navbar = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-100 fixed top-0 z-10"}"><div class="${"navbar-start"}"><div class="${"dropdown"}"><label for tabindex="${"0"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h7"}"></path></svg></label>
			<ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}"><li><div>Portfolio</div></li>
				<li><div>About</div></li>
				<li><div>Media</div></li></ul></div></div>
	<div class="${"navbar-center"}"><button class="${"btn btn-ghost gradient-text normal-case text-xl"}">Reid Patterson</button></div>
	<div class="${"navbar-end"}">${(0, import_index_6b489d84.v)(import_Contact_8a18bbeb.C, "Contact").$$render($$result, {}, {}, {})}</div>
</div>`;
});
var About_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".portrait.svelte-17udlyu.svelte-17udlyu{height:80%;border-radius:35%;position:absolute;z-index:1}img.svelte-17udlyu.svelte-17udlyu{-o-object-fit:contain;object-fit:contain}#action.svelte-17udlyu.svelte-17udlyu{display:flex;position:relative;width:100%;min-height:400px;align-items:center;justify-content:center}#about-desc.svelte-17udlyu.svelte-17udlyu{width:65%;max-width:600px;min-width:250px}.modal-box.svelte-17udlyu.svelte-17udlyu{border-radius:10px;overflow:visible}#interest-modal-image.svelte-17udlyu.svelte-17udlyu{position:absolute;top:-10px;right:-10px;border-radius:100%;background-color:#111;width:50px;height:50px;align-items:center}#interest-modal-image.svelte-17udlyu>img.svelte-17udlyu{position:absolute;width:60%}.glow-small.svelte-17udlyu.svelte-17udlyu:before{content:'';background:linear-gradient(45deg, #ff0000, #ff00c8, #002aff, #7b00ff, #ff00c8, #ff0000);position:absolute;top:-2px;left:-2px;background-size:400%;z-index:-1;filter:blur(5px);width:calc(100% + 4px);height:calc(100% + 4px);-webkit-animation:svelte-17udlyu-glowing 60s linear infinite;animation:svelte-17udlyu-glowing 60s linear infinite;transition:opacity 0.3s ease-in-out;border-radius:100%;opacity:1}.glow-small.svelte-17udlyu.svelte-17udlyu:after{z-index:-1;content:'';position:absolute;width:100%;height:100%;background:#111;left:0;top:0;border-radius:100%}@-webkit-keyframes svelte-17udlyu-glowing{0%{background-position:0 0}50%{background-position:400% 0}100%{background-position:0 0}}@keyframes svelte-17udlyu-glowing{0%{background-position:0 0}50%{background-position:400% 0}100%{background-position:0 0}}")();
const css$5 = {
  code: ".portrait.svelte-17udlyu.svelte-17udlyu{height:80%;border-radius:35%;position:absolute;z-index:1}img.svelte-17udlyu.svelte-17udlyu{object-fit:contain}#action.svelte-17udlyu.svelte-17udlyu{display:flex;position:relative;width:100%;min-height:400px;align-items:center;justify-content:center}#about-desc.svelte-17udlyu.svelte-17udlyu{width:65%;max-width:600px;min-width:250px}.modal-box.svelte-17udlyu.svelte-17udlyu{border-radius:10px;overflow:visible}#interest-modal-image.svelte-17udlyu.svelte-17udlyu{position:absolute;top:-10px;right:-10px;border-radius:100%;background-color:#111;width:50px;height:50px;align-items:center}#interest-modal-image.svelte-17udlyu>img.svelte-17udlyu{position:absolute;width:60%}.glow-small.svelte-17udlyu.svelte-17udlyu:before{content:'';background:linear-gradient(45deg, #ff0000, #ff00c8, #002aff, #7b00ff, #ff00c8, #ff0000);position:absolute;top:-2px;left:-2px;background-size:400%;z-index:-1;filter:blur(5px);width:calc(100% + 4px);height:calc(100% + 4px);animation:svelte-17udlyu-glowing 60s linear infinite;opacity:0;transition:opacity 0.3s ease-in-out;border-radius:100%}.glow-small.svelte-17udlyu.svelte-17udlyu:before{opacity:1}.glow-small.svelte-17udlyu.svelte-17udlyu:after{z-index:-1;content:'';position:absolute;width:100%;height:100%;background:#111;left:0;top:0;border-radius:100%}@keyframes svelte-17udlyu-glowing{0%{background-position:0 0}50%{background-position:400% 0}100%{background-position:0 0}}",
  map: null
};
const About = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let seriousZ = 1;
  let smileZ = -1;
  let title = "title";
  let content = "content";
  let img = "";
  $$result.css.add(css$5);
  return `<label for="${"interest-modal"}" class="${["modal cursor-pointer", ""].join(" ").trim()}"><label class="${"modal-box relative svelte-17udlyu"}" for="${" "}"><div id="${"interest-modal-image"}" class="${"glow-small flex justify-center svelte-17udlyu"}"><img src="${"assets/" + (0, import_index_6b489d84.e)(img) + ".png"}" alt="${"obsidian icon"}" class="${"svelte-17udlyu"}"></div>
		<h3 class="${"text-lg font-bold"}">${(0, import_index_6b489d84.e)(title)}</h3>
		<p class="${"py-4"}">${(0, import_index_6b489d84.e)(content)}</p></label></label>

<div id="${"about"}" class="${"hero section min-h-screen bg-base-200 flex justify-center"}"><div class="${"hero-content flex align-middle justify-center text-center"}"><div>${`<div><h1 class="${"text-5xl font-bold"}">About Me</h1>
					<div class="${"flex align-middle justify-center flex-wrap"}" id="${"about-pic"}"><div id="${"about-desc"}" class="${"py-6 text-xl text-left self-center svelte-17udlyu"}"><p class="${"text-2xl italic mb-3"}">Hello, I&#39;m Reid!</p>
							<p class="${"mb-3"}">I&#39;m an educator and developer living in Vancouver, BC.
							</p>
							<p class="${"mb-3"}">By day, I work at <a class="${"gradient-text"}" href="${"https://geeringup.apsc.ubc.ca/"}">UBC Geering Up</a>
								as a computer science instructor and web developer, helping K-12 teachers bring
								topics like AI and Digital Literacy into their classrooms.
							</p>
							<p>By night, I moonlight as a tech tinkerer - making helpful tools &amp; websites, working with training machine learning models, and experimenting with algorithmically generated art.
							</p></div>
						<div id="${"action"}" class="${"svelte-17udlyu"}"><img class="${"portrait svelte-17udlyu"}" style="${"z-index: " + (0, import_index_6b489d84.e)(seriousZ.toString())}" src="${"MeSerious.webp"}" alt="${""}">
							<img class="${"portrait svelte-17udlyu"}" style="${"z-index: " + (0, import_index_6b489d84.e)(smileZ.toString())}" src="${"MeFun.webp"}" alt="${""}"></div></div></div>`}
			
			
			</div></div>
</div>`;
});
var ProjectCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".card.svelte-1whccvf{box-shadow:0 0 2rem 0 rgb(255 255 255 / 30%);width:80vw !important;min-width:250px;max-width:350px;height:550px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}img.svelte-1whccvf{height:200px;width:100%;-o-object-fit:contain;object-fit:contain}")();
const css$4 = {
  code: ".card.svelte-1whccvf{box-shadow:0 0 2rem 0 rgb(255 255 255 / 30%);width:80vw !important;min-width:250px;max-width:350px;height:550px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}img.svelte-1whccvf{height:200px;width:100%;object-fit:contain}",
  map: null
};
const ProjectCard = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  let { alt = "" } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { topBadge = "" } = $$props;
  let { link = "" } = $$props;
  let { bottomBadges = [] } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.topBadge === void 0 && $$bindings.topBadge && topBadge !== void 0)
    $$bindings.topBadge(topBadge);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.bottomBadges === void 0 && $$bindings.bottomBadges && bottomBadges !== void 0)
    $$bindings.bottomBadges(bottomBadges);
  $$result.css.add(css$4);
  return `<div class="${"card bg-base-100 rounded-md shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2) svelte-1whccvf"}"><figure><img${(0, import_index_6b489d84.a)("src", url, 0)}${(0, import_index_6b489d84.a)("alt", alt, 0)} class="${"svelte-1whccvf"}"></figure>
	<div class="${"card-body items-center text-center"}"><h2 class="${"card-title gradient-text uppercase"}">${(0, import_index_6b489d84.e)(title)}</h2>
		
		<p>${(0, import_index_6b489d84.e)(description)}</p>
		<div class="${"card-actions justify-center"}">${(0, import_index_6b489d84.b)(bottomBadges, (badge) => {
    return `<div class="${"badge badge-outline"}">${(0, import_index_6b489d84.e)(badge)}</div>`;
  })}</div>
		<a${(0, import_index_6b489d84.a)("href", `/portfolio/${link}`, 0)} target="${"_self"}"><button class="${"btn uppercase glow-on-hover mt-3"}">Learn More</button></a></div>
</div>`;
});
var Portfolio_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".scene.svelte-dabkl4::-webkit-scrollbar{display:none}#portfolio.svelte-dabkl4{padding-bottom:100px;width:100vw}.hero-content.svelte-dabkl4{max-width:80%}")();
const css$3 = {
  code: ".scene.svelte-dabkl4::-webkit-scrollbar{display:none}#portfolio.svelte-dabkl4{padding-bottom:100px;width:100vw}.hero-content.svelte-dabkl4{max-width:80%}",
  map: null
};
const Portfolio = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div id="${"portfolio"}" class="${"section hero min-h-screen bg-base-200 svelte-dabkl4"}"><div class="${"hero-content text-center svelte-dabkl4"}"><div><h1 class="${"text-5xl font-bold mt-14 text-center"}">My Portfolio</h1>
			
			
			
			<div class="${"scene svelte-dabkl4"}" style="${"margin: 20px 0px; width: auto; max-width:100%; overflow-y: visible; overflow-x: visible; max-width: 80vw"}"><div class="${"flex align-center justify-center carousel-container"}"><div class="${"carousel-cell"}">${(0, import_index_6b489d84.v)(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Unity ML Tournament",
    url: "assets/ML_Agents_scene.png",
    alt: "chip",
    topBadge: "featured",
    description: "An open ended learning environment where university students train\r\n							machine learning agents to compete in a capture the flag competition.",
    bottomBadges: ["Unity", "Unity ML Agents"],
    link: "unityml"
  }, {}, {})}</div>
					
					<div class="${"carousel-cell"}">${(0, import_index_6b489d84.v)(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Evolving Cyborgs",
    url: "assets/EvolvingCyborgs.jpg",
    alt: "chip",
    topBadge: "featured",
    description: "A gamified habit and behaviour tracker. Based off of psychological\r\n							research, this app aims to make the process of behaviour change easier.",
    bottomBadges: ["Svelte", "Supabase", "PWA", "Netlify", "Tailwind CSS"],
    link: "evolvingcyborgs"
  }, {}, {})}</div>

					<div class="${"carousel-cell"}">${(0, import_index_6b489d84.v)(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Tech Tracker",
    url: "assets/TechTracker.jpg",
    alt: "chip",
    topBadge: "featured",
    description: "An inventory management app for employees to sign out, track, and return\r\n							technology (laptops, arduinos, etc...) used in our program delivery.",
    bottomBadges: ["Svelte", "Supabase", "PWA", "Netlify", "Tailwind CSS"],
    link: "techtracker"
  }, {}, {})}</div>
					<div class="${"carousel-cell"}">${(0, import_index_6b489d84.v)(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Teacher Pro-D Hub",
    url: "assets/Pro-D_Hub.png",
    alt: "chip",
    topBadge: "featured",
    description: "A hub to provide STEM resources, lesson plans, online courses, and events\r\n							for teachers",
    bottomBadges: ["Webflow"],
    link: "pro-dhub"
  }, {}, {})}</div>
					
					</div></div>
			<button class="${"btn btn-circle"}">&lt;
			</button>
			<button class="${"btn btn-circle"}">&gt;
			</button></div></div>
</div>`;
});
var Media_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".iframe-container.svelte-1gw75q1{position:relative;overflow:hidden;width:90vw;max-width:1200px;height:50vw;min-height:200px}iframe.svelte-1gw75q1{position:absolute;top:0;left:10%;bottom:0;right:10%;width:80%;height:100%}")();
const css$2 = {
  code: ".iframe-container.svelte-1gw75q1{position:relative;overflow:hidden;width:90vw;max-width:1200px;height:50vw;min-height:200px}iframe.svelte-1gw75q1{position:absolute;top:0;left:10%;bottom:0;right:10%;width:80%;height:100%}",
  map: null
};
const Media = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="${"media"}" class="${"hero section min-h-screen bg-base-200 flex justify-center"}"><div class="${"hero-content flex align-middle justify-center text-center flex-col "}"><h1 class="${"text-5xl font-bold"}">Media</h1>
		<div class="${"iframe-container svelte-1gw75q1"}"><iframe src="${"https://www.youtube.com/embed/cqaQNkmpyQ4"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1gw75q1"}"></iframe></div></div>
</div>`;
});
var menuScroller_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".glow.svelte-4a5hzf:before{opacity:0.5 !important}.tab.svelte-4a5hzf{width:auto;margin:auto 5px;background-color:black}.tab.svelte-4a5hzf:after{background:black}.tab.svelte-4a5hzf:before{opacity:0}")();
const css$1 = {
  code: ".glow.svelte-4a5hzf:before{opacity:0.5 !important}.tab.svelte-4a5hzf{width:auto;margin:auto 5px;background-color:black}.tab.svelte-4a5hzf:after{background:black}.tab.svelte-4a5hzf:before{opacity:0}",
  map: null
};
const MenuScroller = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { classes = "" } = $$props;
  let { currentScroll } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.currentScroll === void 0 && $$bindings.currentScroll && currentScroll !== void 0)
    $$bindings.currentScroll(currentScroll);
  $$result.css.add(css$1);
  return `<div class="${[
    (0, import_index_6b489d84.e)((0, import_index_6b489d84.n)(classes)) + " svelte-4a5hzf",
    currentScroll == name.toLowerCase() ? "glow" : ""
  ].join(" ").trim()}">${(0, import_index_6b489d84.e)(name)}</div>`;
});
var BottomNav_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#bottom-nav-wrapper.svelte-1i61dg1.svelte-1i61dg1{position:fixed;bottom:0px;left:0px;display:flex;justify-content:center;width:100%;border-radius:0px}.glow.svelte-1i61dg1.svelte-1i61dg1:before{opacity:0.5 !important}.tab.svelte-1i61dg1.svelte-1i61dg1{width:auto;margin:auto 5px;background-color:black}.tab.svelte-1i61dg1.svelte-1i61dg1:after{background:black}.tab.svelte-1i61dg1.svelte-1i61dg1:before{opacity:0}img.svelte-1i61dg1.svelte-1i61dg1{height:30px}.menu.svelte-1i61dg1 li.svelte-1i61dg1{margin-bottom:5px\r\n	}")();
const css = {
  code: "#bottom-nav-wrapper.svelte-1i61dg1.svelte-1i61dg1{position:fixed;bottom:0px;left:0px;display:flex;justify-content:center;width:100%;border-radius:0px}.glow.svelte-1i61dg1.svelte-1i61dg1:before{opacity:0.5 !important}.tab.svelte-1i61dg1.svelte-1i61dg1{width:auto;margin:auto 5px;background-color:black}.tab.svelte-1i61dg1.svelte-1i61dg1:after{background:black}.tab.svelte-1i61dg1.svelte-1i61dg1:before{opacity:0}img.svelte-1i61dg1.svelte-1i61dg1{height:30px}.menu.svelte-1i61dg1 li.svelte-1i61dg1{margin-bottom:5px\r\n	}",
  map: null
};
const BottomNav = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  let currentScroll = "home";
  let opacity = 0;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="${"bottom-nav-wrapper"}" class="${"tabs tabs-boxed bg-base-100 z-20 svelte-1i61dg1"}" style="${"opacity: " + (0, import_index_6b489d84.e)(opacity) + ";"}"><div class="${[
      "tab glow-on-hover tab-lg svelte-1i61dg1",
      currentScroll === "home" ? "glow" : ""
    ].join(" ").trim()}"><img src="${"/home.png"}" alt="${"home button"}" class="${"svelte-1i61dg1"}"></div>
	<div class="${"hidden xs:block"}">${(0, import_index_6b489d84.v)(MenuScroller, "MenuScroller").$$render($$result, {
      name: "About",
      classes: "tab glow-on-hover tab-lg",
      currentScroll
    }, {
      currentScroll: ($$value) => {
        currentScroll = $$value;
        $$settled = false;
      }
    }, {})}
		${(0, import_index_6b489d84.v)(MenuScroller, "MenuScroller").$$render($$result, {
      name: "Portfolio",
      classes: "tab glow-on-hover tab-lg",
      currentScroll
    }, {
      currentScroll: ($$value) => {
        currentScroll = $$value;
        $$settled = false;
      }
    }, {})}
		${(0, import_index_6b489d84.v)(MenuScroller, "MenuScroller").$$render($$result, {
      name: "Media",
      classes: "tab glow-on-hover tab-lg",
      currentScroll
    }, {
      currentScroll: ($$value) => {
        currentScroll = $$value;
        $$settled = false;
      }
    }, {})}</div>
	<div class="${"dropdown dropdown-top dropdown-end xs:hidden"}"><label tabindex="${"0"}" class="${"class:glow m-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h7"}"></path></svg></label>
		<ul tabindex="${"0"}" class="${"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 svelte-1i61dg1"}"><li class="${"svelte-1i61dg1"}">${(0, import_index_6b489d84.v)(MenuScroller, "MenuScroller").$$render($$result, {
      name: "About",
      classes: "tab glow-on-hover tab-lg flex align-center",
      currentScroll
    }, {
      currentScroll: ($$value) => {
        currentScroll = $$value;
        $$settled = false;
      }
    }, {})}</li>
			<li class="${"svelte-1i61dg1"}">${(0, import_index_6b489d84.v)(MenuScroller, "MenuScroller").$$render($$result, {
      name: "Portfolio",
      classes: "tab glow-on-hover tab-lg",
      currentScroll
    }, {
      currentScroll: ($$value) => {
        currentScroll = $$value;
        $$settled = false;
      }
    }, {})}</li>

			<li class="${"svelte-1i61dg1"}">${(0, import_index_6b489d84.v)(MenuScroller, "MenuScroller").$$render($$result, {
      name: "Media",
      classes: "tab glow-on-hover tab-lg",
      currentScroll
    }, {
      currentScroll: ($$value) => {
        currentScroll = $$value;
        $$settled = false;
      }
    }, {})}</li></ul></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Routes = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-base-200"}">${(0, import_index_6b489d84.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${(0, import_index_6b489d84.v)(Hero, "Hero").$$render($$result, {}, {}, {})}

${(0, import_index_6b489d84.v)(BottomNav, "BottomNav").$$render($$result, {}, {}, {})}
${(0, import_index_6b489d84.v)(About, "About").$$render($$result, {}, {}, {})}
${(0, import_index_6b489d84.v)(Portfolio, "Portfolio").$$render($$result, {}, {}, {})}
${(0, import_index_6b489d84.v)(Media, "Media").$$render($$result, {}, {}, {})}</div>`;
});
