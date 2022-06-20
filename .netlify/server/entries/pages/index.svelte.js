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
var import_index_1259f1f6 = require("../../chunks/index-1259f1f6.js");
var import_svelte_gestures = require("svelte-gestures");
var Hero_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".hero-content.svelte-1yqcbz5{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0, 0, 0, 0.4);box-shadow:0 0 1rem 0 rgba(255, 255, 255, 0.2);width:50%;max-width:800px;min-width:300px}.btn.svelte-1yqcbz5{flex-shrink:2;width:150px;margin:10px auto}")();
const css$5 = {
  code: ".hero-content.svelte-1yqcbz5{backdrop-filter:blur(5px);background-color:rgba(0, 0, 0, 0.4);box-shadow:0 0 1rem 0 rgba(255, 255, 255, 0.2);width:50%;max-width:800px;min-width:300px}.btn.svelte-1yqcbz5{flex-shrink:2;width:150px;margin:10px auto}",
  map: null
};
const Hero = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div id="${"home"}" class="${"section hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center rounded p-10 svelte-1yqcbz5"}"><div class="${"max-w-md"}"><p class="${"text-xl font-semibold text-slate-100"}">Hi, I&#39;m</p>
			<h1 class="${"text-5xl font-bold gradient-text"}">Reid Patterson</h1>
			<p class="${"text-xl p-4 text-slate-100"}">Tinkerer. Developer. Educator.</p>
			<div class="${"flex flex-col m-auto"}"><button class="${"btn glow-on-hover m-auto uppercase svelte-1yqcbz5"}">About Me</button>
                <button class="${"btn glow-on-hover m-auto uppercase svelte-1yqcbz5"}">Portfolio</button></div></div></div>
</div>`;
});
var Contact_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".btn.svelte-625frx{background:linear-gradient(45deg, #002aff, #7b00ff, #ff00c8)}.glow-on-hover.svelte-625frx:before{opacity:0.4}.glow-on-hover.svelte-625frx:hover:before{opacity:1}")();
const css$4 = {
  code: ".btn.svelte-625frx{background:linear-gradient(45deg, #002aff, #7b00ff, #ff00c8)}.glow-on-hover.svelte-625frx:before{opacity:0.4}.glow-on-hover.svelte-625frx:hover:before{opacity:1}",
  map: null
};
const Contact = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<input type="${"checkbox"}" id="${"my-modal-4"}" class="${"modal-toggle"}">
<label for="${"my-modal-4"}" class="${"modal cursor-pointer"}"><label class="${"modal-box relative"}" for="${""}"><h3 class="${"text-lg font-bold"}">Contact</h3>
    <p class="${"py-4"}">Under Construction</p></label></label>
<div class="${"z-30"}"><label for="${"my-modal-4"}" class="${"btn mr-2 modal-button glow-on-hover svelte-625frx"}">Contact</label>
</div>`;
});
const Navbar = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let opacity = 0;
  return `<div class="${"navbar bg-base-100 fixed top-0 z-10"}" style="${"opacity: " + (0, import_index_1259f1f6.e)(opacity) + ";"}"><div class="${"navbar-start"}"><div class="${"dropdown"}"><label for tabindex="${"0"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h7"}"></path></svg></label>
			<ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}"><li><a href>Portfolio</a></li>
				<li><a href>About</a></li></ul></div></div>
	<div class="${"navbar-center"}"><button class="${"btn btn-ghost gradient-text normal-case text-xl"}">Reid Patterson</button></div>
	<div class="${"navbar-end"}">${(0, import_index_1259f1f6.v)(Contact, "Contact").$$render($$result, {}, {}, {})}</div>
</div>`;
});
var About_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".portrait.svelte-fakfbb{height:80%;border-radius:35%;position:absolute;z-index:1}img.svelte-fakfbb{-o-object-fit:contain;object-fit:contain}#action.svelte-fakfbb{display:flex;position:relative;width:100%;min-width:300px;min-height:400px;align-items:center;justify-content:center}")();
const css$3 = {
  code: ".portrait.svelte-fakfbb{height:80%;border-radius:35%;position:absolute;z-index:1}img.svelte-fakfbb{object-fit:contain}#action.svelte-fakfbb{display:flex;position:relative;width:100%;min-width:300px;min-height:400px;align-items:center;justify-content:center}",
  map: null
};
const About = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let seriousZ = 1;
  let smileZ = -1;
  $$result.css.add(css$3);
  return `<div id="${"about"}" class="${"section min-h-screen bg-base-200 flex justify-center"}"><div class="${"hero-content flex-col align-middle justify-center text-center"}"><div>${`<div><h1 class="${"text-5xl font-bold"}">About Me</h1>
					<div class="${"flex flex-col align-middle justify-center flex-wrap"}" id="${"about-pic"}"><p class="${"py-6 self-center"}">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<div id="${"action"}" class="${"svelte-fakfbb"}"><img class="${"portrait svelte-fakfbb"}" style="${"z-index: " + (0, import_index_1259f1f6.e)(seriousZ.toString())}" src="${"MeSerious.webp"}" alt="${""}">
							<img class="${"portrait svelte-fakfbb"}" style="${"z-index: " + (0, import_index_1259f1f6.e)(smileZ.toString())}" src="${"MeFun.webp"}" alt="${""}"></div></div></div>`}
			${``}
			${``}
			<div class="${"tabs flex justify-center"}"><button class="${["tab tab-bordered", "tab-active"].join(" ").trim()}">About</button>
				<button class="${["tab tab-bordered", ""].join(" ").trim()}">Work</button>
				<button class="${["tab tab-bordered", ""].join(" ").trim()}">Interests</button></div></div></div>
</div>`;
});
var ProjectCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".card.svelte-hsk03s{box-shadow:0 0 2rem 0 rgb(255 255 255 / 30%);width:70vw;min-width:250px;max-width:350px;height:550px;margin:10px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}img.svelte-hsk03s{height:200px;width:100%;-o-object-fit:cover;object-fit:cover}")();
const css$2 = {
  code: ".card.svelte-hsk03s{box-shadow:0 0 2rem 0 rgb(255 255 255 / 30%);width:70vw;min-width:250px;max-width:350px;height:550px;margin:10px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}img.svelte-hsk03s{height:200px;width:100%;object-fit:cover}",
  map: null
};
const ProjectCard = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  let { alt = "" } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { bottomBadges = [] } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.bottomBadges === void 0 && $$bindings.bottomBadges && bottomBadges !== void 0)
    $$bindings.bottomBadges(bottomBadges);
  $$result.css.add(css$2);
  return `<div class="${"card w-96 bg-base-100 rounded-md shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2) svelte-hsk03s"}"><figure><img${(0, import_index_1259f1f6.a)("src", url, 0)}${(0, import_index_1259f1f6.a)("alt", alt, 0)} class="${"svelte-hsk03s"}"></figure>
	<div class="${"card-body items-center text-center"}"><h2 class="${"card-title gradient-text uppercase"}">${(0, import_index_1259f1f6.e)(title)}</h2>
		
		<p>${(0, import_index_1259f1f6.e)(description)}</p>
		<div class="${"card-actions justify-center"}">${(0, import_index_1259f1f6.b)(bottomBadges, (badge) => {
    return `<div class="${"badge badge-outline"}">${(0, import_index_1259f1f6.e)(badge)}</div>`;
  })}</div>
		<button class="${"btn uppercase glow-on-hover mt-3"}">Learn More</button></div>
</div>`;
});
var Portfolio_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#portfolio.svelte-150avu7{padding-bottom:100px}.scene.svelte-150avu7{position:relative;height:600px;perspective:1000px}.carousel-cell.svelte-150avu7{position:absolute;width:350px;height:600px;left:10px;top:10px;transition:transform 1s, opacity 1s}.carousel-container.svelte-150avu7{width:100%;height:100%;position:absolute;transform:translateZ(-288px);transform-style:preserve-3d;transition:transform 1s}.carousel-cell.svelte-150avu7:nth-child(1){transform:rotateY(0deg) translateZ(288px)}.carousel-cell.svelte-150avu7:nth-child(2){transform:rotateY(40deg) translateZ(288px)}.carousel-cell.svelte-150avu7:nth-child(3){transform:rotateY(80deg) translateZ(288px)}.carousel-cell.svelte-150avu7:nth-child(4){transform:rotateY(120deg) translateZ(288px)}.carousel-cell.svelte-150avu7:nth-child(5){transform:rotateY(160deg) translateZ(288px)}")();
const css$1 = {
  code: "#portfolio.svelte-150avu7{padding-bottom:100px}.scene.svelte-150avu7{position:relative;height:600px;perspective:1000px}.carousel-cell.svelte-150avu7{position:absolute;width:350px;height:600px;left:10px;top:10px;transition:transform 1s, opacity 1s}.carousel-container.svelte-150avu7{width:100%;height:100%;position:absolute;transform:translateZ(-288px);transform-style:preserve-3d;transition:transform 1s}.carousel-cell.svelte-150avu7:nth-child(1){transform:rotateY(0deg) translateZ(288px)}.carousel-cell.svelte-150avu7:nth-child(2){transform:rotateY(40deg) translateZ(288px)}.carousel-cell.svelte-150avu7:nth-child(3){transform:rotateY(80deg) translateZ(288px)}.carousel-cell.svelte-150avu7:nth-child(4){transform:rotateY(120deg) translateZ(288px)}.carousel-cell.svelte-150avu7:nth-child(5){transform:rotateY(160deg) translateZ(288px)}",
  map: null
};
const Portfolio = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let isHorizontal;
  let width = "400px";
  $$result.css.add(css$1);
  return `<div id="${"portfolio"}" class="${"section hero min-h-screen bg-base-200 svelte-150avu7"}"><div class="${"hero-content text-center"}"><div><h1 class="${"text-5xl font-bold"}">My Portfolio</h1>
			
			<h2 class="${"font-bold text-3xl m-5"}">Featured Projects</h2>
			
			<div class="${"scene svelte-150avu7"}" style="${"margin: " + (0, import_index_1259f1f6.e)(!isHorizontal * 100) + "px auto; width: " + (0, import_index_1259f1f6.e)(width)}"><div class="${"flex justify-center carousel-container svelte-150avu7"}"><div class="${"carousel-cell svelte-150avu7"}">${(0, import_index_1259f1f6.v)(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Evolving Cyborgs",
    url: "chip.jpg",
    alt: "chip",
    topBadge: "featured",
    description: "A gamified habit and behaviour tracker. Based off of psychological research, this app aims to make the process of behaviour change easier.",
    bottomBadges: ["Svelte", "Supabase", "PWA", "Netlify", "Tailwind CSS"]
  }, {}, {})}</div>
					<div class="${"carousel-cell svelte-150avu7"}">${(0, import_index_1259f1f6.v)(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Unity ML Tournament",
    url: "chip2.jpg",
    alt: "chip",
    topBadge: "featured",
    description: "An open ended learning environment where university students train machine learning agents to compete in a capture the flag competition.",
    bottomBadges: ["Unity", "Unity ML Agents"]
  }, {}, {})}</div>
					<div class="${"carousel-cell svelte-150avu7"}">${(0, import_index_1259f1f6.v)(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Tech Tracker",
    url: "lights.jpg",
    alt: "chip",
    topBadge: "featured",
    description: "An inventory management app for employees to sign out, track, and return technology (laptops, arduinos, etc...) used in our program delivery.",
    bottomBadges: ["Svelte", "Supabase", "PWA", "Netlify", "Tailwind CSS"]
  }, {}, {})}</div>
					<div class="${"carousel-cell svelte-150avu7"}">${(0, import_index_1259f1f6.v)(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Teacher Pro-D Hub",
    url: "lights.jpg",
    alt: "chip",
    topBadge: "featured",
    description: "A hub to provide STEM resources, lesson plans, online courses, and events for teachers",
    bottomBadges: ["Webflow"]
  }, {}, {})}</div>
					<div class="${"carousel-cell svelte-150avu7"}">${(0, import_index_1259f1f6.v)(ProjectCard, "ProjectCard").$$render($$result, {
    title: "Project 5",
    url: "lights.jpg",
    alt: "chip",
    topBadge: "featured",
    description: "A hub to provide STEM resources, lesson plans, online courses, and events for teachers",
    bottomBadges: ["Webflow"]
  }, {}, {})}</div></div></div>
			<button class="${"btn btn-circle"}">&lt;</button>
			<button class="${"btn btn-circle"}">&gt;</button></div></div>
</div>`;
});
var BottomNav_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#bottom-nav-wrapper.svelte-gw0zgu{position:-webkit-sticky;position:sticky;top:calc(100vh - 64px);display:flex;justify-content:center;width:100%;height:65px;border-radius:0px}.glow.svelte-gw0zgu:before{opacity:0.5 !important}.tab.svelte-gw0zgu{width:auto;margin:auto 5px;background-color:black}.tab.svelte-gw0zgu:after{background:black}.tab.svelte-gw0zgu:before{opacity:0}")();
const css = {
  code: "#bottom-nav-wrapper.svelte-gw0zgu{position:sticky;top:calc(100vh - 64px);display:flex;justify-content:center;width:100%;height:65px;border-radius:0px}.glow.svelte-gw0zgu:before{opacity:0.5 !important}.tab.svelte-gw0zgu{width:auto;margin:auto 5px;background-color:black}.tab.svelte-gw0zgu:after{background:black}.tab.svelte-gw0zgu:before{opacity:0}",
  map: null
};
const BottomNav = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let opacity = 0;
  $$result.css.add(css);
  return `<div id="${"bottom-nav-wrapper"}" class="${"tabs tabs-boxed bg-base-100 sticky z-20 svelte-gw0zgu"}" style="${"opacity: " + (0, import_index_1259f1f6.e)(opacity) + ";"}"><div class="${[
    "tab glow-on-hover tab-lg svelte-gw0zgu",
    "glow"
  ].join(" ").trim()}">Home
	</div>
	<div class="${[
    "tab glow-on-hover tab-lg svelte-gw0zgu",
    ""
  ].join(" ").trim()}">About
	</div>
	<div class="${[
    "tab glow-on-hover tab-lg svelte-gw0zgu",
    ""
  ].join(" ").trim()}">Portfolio
	</div>
</div>`;
});
const Routes = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_1259f1f6.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${(0, import_index_1259f1f6.v)(Hero, "Hero").$$render($$result, {}, {}, {})}

${(0, import_index_1259f1f6.v)(BottomNav, "BottomNav").$$render($$result, {}, {}, {})}
${(0, import_index_1259f1f6.v)(About, "About").$$render($$result, {}, {}, {})}
${(0, import_index_1259f1f6.v)(Portfolio, "Portfolio").$$render($$result, {}, {}, {})}`;
});
