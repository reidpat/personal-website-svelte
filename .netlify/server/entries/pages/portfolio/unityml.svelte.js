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
  default: () => Unityml
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../../chunks/index-6b489d84.js");
var import_NavbarOther_80ea6fbd = require("../../../chunks/NavbarOther-80ea6fbd.js");
var import_Construction_930e19b6 = require("../../../chunks/Construction-930e19b6.js");
var import_ua_parser_js = require("ua-parser-js");
var import_Contact_8a18bbeb = require("../../../chunks/Contact-8a18bbeb.js");
var unityml_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "ul.svelte-f907jy{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}img.svelte-f907jy{max-height:400px;-o-object-fit:contain;object-fit:contain}.divider.svelte-f907jy{padding:20px;padding-top:60px}h1.svelte-f907jy,h2.svelte-f907jy,h3.svelte-f907jy{margin:20px 20px;font-weight:700}p.svelte-f907jy{text-align:justify}")();
const css = {
  code: "ul.svelte-f907jy{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}img.svelte-f907jy{max-height:400px;object-fit:contain}.divider.svelte-f907jy{padding:20px;padding-top:60px}h1.svelte-f907jy,h2.svelte-f907jy,h3.svelte-f907jy{margin:20px 20px;font-weight:700}p.svelte-f907jy{text-align:justify}",
  map: null
};
const Unityml = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Unity ML</title>`, ""}<link rel="${"icon"}" href="${"../assets/code_icon.png"}" data-svelte="svelte-1dzzhpi">`, ""}
${(0, import_index_6b489d84.v)(import_NavbarOther_80ea6fbd.N, "NavbarOther").$$render($$result, {}, {}, {})}
<div class="${"background bg-base-200 p-5 min-h-screen"}"><div class="${"content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"}"><h1 class="${"text-3xl bold text-center mb-3 svelte-f907jy"}">Unity ML Agents</h1>
		<p class="${"text-lg text-center svelte-f907jy"}">A Unity based set of labs and a machine learning tournament designed for use by third year university students
			in Cognitive Systems 300 at the University of British Columbia
		</p>
		<img class="${"max-w-10 m-10 rounded-lg svelte-f907jy"}" src="${"../assets/unity_ml/ML_Agents_scene.png"}" alt="${"unity ml"}">
		

		<a class="${"m-auto btn glow-on-hover uppercase mt-5"}" style="${"width: 250px;"}" href="${"https://github.com/COGS300/lab7to9-robot-tournament"}" target="${"_blank"}">See Code
		</a>

		<h2 class="${"text-2xl bold divider svelte-f907jy"}">The Project</h2>

		<div class="${"tabs tabs-boxed flex justify-center bg-base-300 mb-5"}"><button class="${["tab tab-lg tab-bordered", ""].join(" ").trim()}">Version 1 (2020)
			</button>
			<button class="${["tab tab-lg tab-bordered", "tab-active"].join(" ").trim()}">Version 2 (2022)
			</button></div>

		${`${`<p class="${"svelte-f907jy"}">The ongoing version of the project which began in fall 2022. This version focuses on new content for each of the labs leading up to the final project.</p>
		<h2 class="${"text-2xl bold divider svelte-f907jy"}">My Role</h2>
		<h2 class="${"text-2xl bold divider svelte-f907jy"}">The Problem</h2>
		<h2 class="${"text-2xl bold divider svelte-f907jy"}">The Solution</h2>
		<img class="${"max-w-10 m-10 rounded-lg svelte-f907jy"}" src="${"../assets/unity_ml/Unity Lab 2.gif"}" alt="${"unity ml"}">
		<img class="${"max-w-10 m-10 rounded-lg svelte-f907jy"}" src="${"../assets/unity_ml/Unity Lab 3.gif"}" alt="${"unity ml"}">
		<img class="${"max-w-10 m-10 rounded-lg svelte-f907jy"}" src="${"../assets/unity_ml/Unity Lab 6.gif"}" alt="${"unity ml"}">
		${(0, import_index_6b489d84.v)(import_Construction_930e19b6.C, "Construction").$$render($$result, {}, {}, {})}`}`}</div>
</div>`;
});
