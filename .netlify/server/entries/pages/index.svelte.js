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
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
var Hero_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".hero-content.svelte-1yqcbz5{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0, 0, 0, 0.4);box-shadow:0 0 1rem 0 rgba(255, 255, 255, 0.2);width:50%;max-width:800px;min-width:300px}.btn.svelte-1yqcbz5{flex-shrink:2;width:150px;margin:10px auto}")();
const css$3 = {
  code: ".hero-content.svelte-1yqcbz5{backdrop-filter:blur(5px);background-color:rgba(0, 0, 0, 0.4);box-shadow:0 0 1rem 0 rgba(255, 255, 255, 0.2);width:50%;max-width:800px;min-width:300px}.btn.svelte-1yqcbz5{flex-shrink:2;width:150px;margin:10px auto}",
  map: null
};
const Hero = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div id="${"home"}" class="${"section hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center rounded p-10 svelte-1yqcbz5"}"><div class="${"max-w-md"}"><p class="${"text-xl font-semibold text-slate-100"}">Hi, I&#39;m</p>
			<h1 class="${"text-5xl font-bold name"}">Reid Patterson</h1>
			<p class="${"text-xl p-4 text-slate-100"}">Tinkerer. Developer. Educator.</p>
			<div class="${"flex flex-col m-auto"}"><button class="${"btn glow-on-hover m-auto svelte-1yqcbz5"}">About Me</button>
                <button class="${"btn glow-on-hover m-auto svelte-1yqcbz5"}">Portfolio</button></div></div></div>
</div>`;
});
var Contact_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".btn.svelte-625frx{background:linear-gradient(45deg, #002aff, #7b00ff, #ff00c8)}.glow-on-hover.svelte-625frx:before{opacity:0.4}.glow-on-hover.svelte-625frx:hover:before{opacity:1}")();
const css$2 = {
  code: ".btn.svelte-625frx{background:linear-gradient(45deg, #002aff, #7b00ff, #ff00c8)}.glow-on-hover.svelte-625frx:before{opacity:0.4}.glow-on-hover.svelte-625frx:hover:before{opacity:1}",
  map: null
};
const Contact = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<input type="${"checkbox"}" id="${"my-modal-4"}" class="${"modal-toggle"}">
<label for="${"my-modal-4"}" class="${"modal cursor-pointer"}"><label class="${"modal-box relative"}" for="${""}"><h3 class="${"text-lg font-bold"}">Contact</h3>
    <p class="${"py-4"}">Under Construction</p></label></label>
<div class="${"z-30"}"><label for="${"my-modal-4"}" class="${"btn mr-2 modal-button glow-on-hover svelte-625frx"}">Contact</label>
</div>`;
});
const Navbar = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  let opacity = 0;
  return `<div class="${"navbar bg-base-100 fixed top-0 z-10"}" style="${"opacity: " + (0, import_index_5f038599.e)(opacity) + ";"}"><div class="${"navbar-start"}"><div class="${"dropdown"}"><label for tabindex="${"0"}" class="${"btn btn-ghost btn-circle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h7"}"></path></svg></label>
			<ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}"><li><a href>Portfolio</a></li>
				<li><a href>About</a></li></ul></div></div>
	<div class="${"navbar-center"}"><button class="${"btn btn-ghost name normal-case text-xl"}">Reid Patterson</button></div>
	<div class="${"navbar-end"}">${(0, import_index_5f038599.v)(Contact, "Contact").$$render($$result, {}, {}, {})}</div>
</div>`;
});
var About_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".portrait.svelte-fakfbb{height:80%;border-radius:35%;position:absolute;z-index:1}img.svelte-fakfbb{-o-object-fit:contain;object-fit:contain}#action.svelte-fakfbb{display:flex;position:relative;width:100%;min-width:300px;min-height:400px;align-items:center;justify-content:center}")();
const css$1 = {
  code: ".portrait.svelte-fakfbb{height:80%;border-radius:35%;position:absolute;z-index:1}img.svelte-fakfbb{object-fit:contain}#action.svelte-fakfbb{display:flex;position:relative;width:100%;min-width:300px;min-height:400px;align-items:center;justify-content:center}",
  map: null
};
const About = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  let seriousZ = 1;
  let smileZ = -1;
  $$result.css.add(css$1);
  return `<div id="${"about"}" class="${"section min-h-screen bg-base-200 flex justify-center"}"><div class="${"hero-content flex-col align-middle justify-center text-center"}"><div>${`<div><h1 class="${"text-5xl font-bold"}">About Me</h1>
					<div class="${"flex flex-col align-middle justify-center flex-wrap"}" id="${"about-pic"}"><p class="${"py-6 self-center"}">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<div id="${"action"}" class="${"svelte-fakfbb"}"><img class="${"portrait svelte-fakfbb"}" style="${"z-index: " + (0, import_index_5f038599.e)(seriousZ.toString())}" src="${"MeSerious.webp"}" alt="${""}">
							<img class="${"portrait svelte-fakfbb"}" style="${"z-index: " + (0, import_index_5f038599.e)(smileZ.toString())}" src="${"MeFun.webp"}" alt="${""}"></div></div></div>`}
			${``}
			${``}
			<div class="${"tabs flex justify-center"}"><button class="${["tab tab-bordered", "tab-active"].join(" ").trim()}">About</button>
				<button class="${["tab tab-bordered", ""].join(" ").trim()}">Work</button>
				<button class="${["tab tab-bordered", ""].join(" ").trim()}">Interests</button></div></div></div>
</div>`;
});
const Portfolio = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"portfolio"}" class="${"section hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}"><h1 class="${"text-5xl font-bold"}">My Portfolio</h1>
			<p class="${"py-6"}">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
			<button class="${"btn glow-on-hover"}">Get Started</button></div></div></div>`;
});
var BottomNav_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#bottom-nav-wrapper.svelte-1vj48as{position:-webkit-sticky;position:sticky;top:calc(100vh - 64px);display:flex;justify-content:center;width:100%;height:65px;border-radius:0px}.glow.svelte-1vj48as:before{opacity:0.7 !important}.tab.svelte-1vj48as{width:auto;margin:auto 5px;background-color:black}.tab.svelte-1vj48as:after{background:black}.tab.svelte-1vj48as:before{opacity:0}")();
const css = {
  code: "#bottom-nav-wrapper.svelte-1vj48as{position:sticky;top:calc(100vh - 64px);display:flex;justify-content:center;width:100%;height:65px;border-radius:0px}.glow.svelte-1vj48as:before{opacity:0.7 !important}.tab.svelte-1vj48as{width:auto;margin:auto 5px;background-color:black}.tab.svelte-1vj48as:after{background:black}.tab.svelte-1vj48as:before{opacity:0}",
  map: null
};
const BottomNav = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  let opacity = 0;
  $$result.css.add(css);
  return `<div id="${"bottom-nav-wrapper"}" class="${"tabs tabs-boxed bg-base-100 sticky z-20 svelte-1vj48as"}" style="${"opacity: " + (0, import_index_5f038599.e)(opacity) + ";"}"><div class="${[
    "tab glow-on-hover tab-lg svelte-1vj48as",
    "glow"
  ].join(" ").trim()}">Home
	</div>
	<div class="${[
    "tab glow-on-hover tab-lg svelte-1vj48as",
    ""
  ].join(" ").trim()}">About
	</div>
	<div class="${[
    "tab glow-on-hover tab-lg svelte-1vj48as",
    ""
  ].join(" ").trim()}">Portfolio
	</div>
</div>`;
});
const Routes = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_5f038599.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${(0, import_index_5f038599.v)(Hero, "Hero").$$render($$result, {}, {}, {})}

${(0, import_index_5f038599.v)(BottomNav, "BottomNav").$$render($$result, {}, {}, {})}
${(0, import_index_5f038599.v)(About, "About").$$render($$result, {}, {}, {})}
${(0, import_index_5f038599.v)(Portfolio, "Portfolio").$$render($$result, {}, {}, {})}`;
});
