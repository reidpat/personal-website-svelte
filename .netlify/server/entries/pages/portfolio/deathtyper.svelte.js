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
  default: () => Deathtyper
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../../chunks/index-6b489d84.js");
var import_NavbarOther_80ea6fbd = require("../../../chunks/NavbarOther-80ea6fbd.js");
var import_Contact_8a18bbeb = require("../../../chunks/Contact-8a18bbeb.js");
var deathtyper_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "ol.svelte-101dw0f{list-style:decimal}img.svelte-101dw0f{max-height:400px;-o-object-fit:contain;object-fit:contain}.divider.svelte-101dw0f{padding:20px;padding-top:60px}h1.svelte-101dw0f,h2.svelte-101dw0f,h3.svelte-101dw0f{margin:20px 20px;font-weight:700}")();
const css = {
  code: "ol.svelte-101dw0f{list-style:decimal}img.svelte-101dw0f{max-height:400px;object-fit:contain}.divider.svelte-101dw0f{padding:20px;padding-top:60px}h1.svelte-101dw0f,h2.svelte-101dw0f,h3.svelte-101dw0f{margin:20px 20px;font-weight:700}",
  map: null
};
const Deathtyper = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Death Typer</title>`, ""}<link rel="${"icon"}" href="${"../assets/code_icon.png"}" data-svelte="svelte-1glmemo">`, ""}
${(0, import_index_6b489d84.v)(import_NavbarOther_80ea6fbd.N, "NavbarOther").$$render($$result, {}, {}, {})}
<div class="${"background bg-base-200 p-10 min-h-screen"}"><div class="${"content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"}"><h1 class="${"text-3xl bold text-center mb-3 svelte-101dw0f"}">Death Typer</h1>
		<p class="${"text-lg text-center"}">A app for training faster typing speeds</p>
		<img class="${"max-w-10 m-10 rounded-lg svelte-101dw0f"}" src="${"../assets/DeathTyper Screens.jpg"}" alt="${"interface for death typer"}">
		<a class="${"m-auto"}" href="${"https://death-typing.vercel.app/"}" target="${"_blank"}"><button class="${"glow-on-hover pl-3 pr-3"}">See Website</button></a>
		<h2 class="${"text-2xl bold divider svelte-101dw0f"}">My Role</h2>
		<p class="${"text-center"}">Solo designer and developer creating this resource for myself to improve my typing speeds
		</p>

		<h2 class="${"text-2xl bold divider svelte-101dw0f"}">The Problem</h2>
		<p>After switching over to the Dvorak keyboard layout a few years ago, I wanted to improve my
			typing speeds and accuracy. I found that it was my accuracy which was holding me back the most
			as even small amount of errors can have a great impact because of the time needed to correct
			them. So I set out to design my own application which would force me to type accurately
			instead of trying to rush for speed first.
		</p>

		<h2 class="${"text-2xl bold divider svelte-101dw0f"}">The Solution</h2>
		<p>To solve this problem I created a sudden death typing mode which would restart the entire
			lesson as soon as you made any mistake. This was slightly too punishing however, so I later
			modified it to restart the current word every time a mistake is made.
		</p>
		<img src="${"/assets/Death Typer.gif"}" alt="${"A gif showing the typing and mistakes process"}" class="${"svelte-101dw0f"}">
		<p>Now with an average speed of 80WPM and an accuracy of over 90% I&#39;m much happier with my typing ability. This project has been extremely successful for me.
		</p>
		<h3 class="${"text-lg bold svelte-101dw0f"}">Next Steps</h3>
		<ol class="${"svelte-101dw0f"}"><li>Display collected average accuracy (data currently being collected but not averaged and displayed)</li>
			<li>Use code snippets instead of quotes to increase coding speed. Currently code typing interface is working, but a good api needs to be found/created to load a variety of code snippets.</li></ol></div>
</div>`;
});
