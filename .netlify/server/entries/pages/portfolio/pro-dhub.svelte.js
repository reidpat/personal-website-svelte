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
  default: () => Pro_dhub
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../../chunks/index-6b489d84.js");
var import_NavbarOther_b7541eba = require("../../../chunks/NavbarOther-b7541eba.js");
var import_Contact_8a18bbeb = require("../../../chunks/Contact-8a18bbeb.js");
var proDhub_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "ul.svelte-101dw0f{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}ol.svelte-101dw0f{list-style:decimal}img.svelte-101dw0f{max-height:400px;-o-object-fit:contain;object-fit:contain}.divider.svelte-101dw0f{padding:20px;padding-top:60px}h1.svelte-101dw0f,h2.svelte-101dw0f,h3.svelte-101dw0f{margin:20px 20px;font-weight:700}")();
const css = {
  code: "ul.svelte-101dw0f{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}ol.svelte-101dw0f{list-style:decimal}img.svelte-101dw0f{max-height:400px;object-fit:contain}.divider.svelte-101dw0f{padding:20px;padding-top:60px}h1.svelte-101dw0f,h2.svelte-101dw0f,h3.svelte-101dw0f{margin:20px 20px;font-weight:700}",
  map: null
};
const Pro_dhub = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Pro-D Hub</title>`, ""}<link rel="${"icon"}" href="${"../assets/code_icon.png"}" data-svelte="svelte-1l7nun7">`, ""}
${(0, import_index_6b489d84.v)(import_NavbarOther_b7541eba.N, "NavbarOther").$$render($$result, {}, {}, {})}
<div class="${"background bg-base-200 p-10 min-h-screen"}"><div class="${"content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"}"><h1 class="${"text-3xl bold text-center mb-3 svelte-101dw0f"}">Teacher Pro-D Hub</h1>
		<p class="${"text-lg text-center"}">A resource hub and event portal for K-12 teachers</p>
		<img class="${"max-w-10 m-10 rounded-lg svelte-101dw0f"}" src="${"..\\assets\\Pro-D_Hub.png"}" alt="${"interface for pro-d hub"}">
		<a class="${"m-auto"}" href="${"https://pro-d.geeringup.ca/"}" target="${"_blank"}"><button class="${"glow-on-hover pl-3 pr-3"}">See Website</button></a>
		<h2 class="${"text-2xl bold divider svelte-101dw0f"}">My Role</h2>
		<p class="${"text-center"}">Solo designer and developer creating this resource for the professional development team at
			Geering Up
		</p>

		<h2 class="${"text-2xl bold divider svelte-101dw0f"}">The Problem</h2>
		<p>When I joined the Pro-D team at Geering Up the current resource hub was being hosted on Edx,
			which required both an Edx account and an invite in order to be accessed. This created a lot
			of unnecessary friction for teachers who may have wanted to use our resources.
		</p>

		<h2 class="${"text-2xl bold divider svelte-101dw0f"}">The Solution</h2>
		<p>Seeing this problem, I pitched the idea of me creating an alternative resource hub which would
			be easier for teachers to access and use. We decided to use <a class="${"link link-secondary"}" href="${"https://webflow.com/"}">Webflow</a> as our technology as it allowed me enough control to create what we needed but was still easy
			for non-technical users to maintain and add content to.
		</p>

		<h3 class="${"text-lg bold svelte-101dw0f"}">Design Process</h3>
		<p class="${"mb-5"}">The design process for this website revolved around the resource page, which contains our
			created scripts for activities that teachers can run in their classroom. This design includes
			3 key features:
		</p>
		<ol class="${"ml-5 svelte-101dw0f"}"><li>Cards
				<ul class="${"pl-2 svelte-101dw0f"}"><li>The main content of the page is the cards. Each activity is represented as a card,
						allowing for clear distinctions between activities and easy parsing of the information
						about said activity.
					</li></ul></li>
			<li>Filters</li>
			<ul class="${"pl-2 svelte-101dw0f"}"><li>As Geering Up has a wide variety of teachers who access the content, teachers need an easy
					way to filter content by grade and topic in order to find activities which are relevant to
					them. To solve this issue, I added a persistent menu which allows you to filter content.
				</li></ul>
			<li>Designers</li>
			<ul class="${"pl-2 svelte-101dw0f"}"><li>People like content better when it feels like it was made by another human. To help with
					this, I added in a small badge to the corner of each card showing a small picture of the
					person who designed the activity.
				</li></ul></ol>
		<img class="${"max-w-5 m-10 rounded-lg svelte-101dw0f"}" src="${"..\\assets\\Pro-DHub.jpg"}" alt="${"interface for pro-d hub"}">

		<h3 class="${"text-lg bold svelte-101dw0f"}">Final Product</h3>
		<p class="${"mb-5"}">This product allowed our team to begin investing more seriously in our online content platform
			as this new website was significantly easier to access and use for both teachers and the
			internal team.
		</p>
		<p class="${"mb-5 text-center"}">This project is freely available to access online.</p>
		<a class="${"m-auto"}" href="${"https://pro-d.geeringup.ca/"}" target="${"_blank"}"><button class="${"glow-on-hover pl-3 pr-3 justify-start"}">See Website</button></a></div>
</div>`;
});
