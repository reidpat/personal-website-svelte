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
  default: () => Arduino
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../../chunks/index-6b489d84.js");
var import_NavbarOther_80ea6fbd = require("../../../chunks/NavbarOther-80ea6fbd.js");
var import_Construction_930e19b6 = require("../../../chunks/Construction-930e19b6.js");
var import_Contact_8a18bbeb = require("../../../chunks/Contact-8a18bbeb.js");
var arduino_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "ul.svelte-101dw0f{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}iframe.svelte-101dw0f{margin:20px auto;width:60%;min-width:200px;height:300px}img.svelte-101dw0f{max-height:400px;-o-object-fit:contain;object-fit:contain}.divider.svelte-101dw0f{padding:20px;padding-top:60px}h1.svelte-101dw0f,h2.svelte-101dw0f{margin:20px 20px;font-weight:700}")();
const css = {
  code: "ul.svelte-101dw0f{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}iframe.svelte-101dw0f{margin:20px auto;width:60%;min-width:200px;height:300px}img.svelte-101dw0f{max-height:400px;object-fit:contain}.divider.svelte-101dw0f{padding:20px;padding-top:60px}h1.svelte-101dw0f,h2.svelte-101dw0f{margin:20px 20px;font-weight:700}",
  map: null
};
const Arduino = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Arduino Robotics</title>`, ""}<link rel="${"icon"}" href="${"../assets/code_icon.png"}" data-svelte="svelte-afog5">`, ""}
${(0, import_index_6b489d84.v)(import_NavbarOther_80ea6fbd.N, "NavbarOther").$$render($$result, {}, {}, {})}
<div class="${"background bg-base-200 p-10 min-h-screen"}"><div class="${"content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"}"><h1 class="${"text-3xl bold text-center mb-3 svelte-101dw0f"}">Arduino Robotics</h1>
		<p class="${"text-lg text-center"}">A collection of labs created and taught during my time as a Cogs 300 Teaching Assistant</p>
		<img class="${"max-w-10 m-10 rounded-lg svelte-101dw0f"}" src="${"../assets/arduino robot.jpg"}" alt="${"An example of the robot stopping when it sees an obstacle"}">

		<h2 class="${"text-2xl bold divider svelte-101dw0f"}">My Role</h2>
		<p class="${"text-center"}">Teaching Assistant and Content Developer
		</p>

		<h2 class="${"text-2xl bold divider svelte-101dw0f"}">The Project</h2>
        <p class="${"text-center"}">Teaching the Arduino robotics labs for the UBC course Cognitive Systems 300</p>
        <br>
        <strong><p class="${"text-center"}">Content Included:</p></strong>
        <ul class="${"svelte-101dw0f"}"><li>Wall sensing</li>
            <li>Obstacle navigation</li>
            <li>Line following</li>
            <li>Emergent led flashing synchronization</li>
            <li>Simple neural networks</li></ul>

		<h2 class="${"text-2xl bold divider svelte-101dw0f"}">Examples</h2>
        <p>As this project took place several years ago now, I unfortunately have less videos and demonstrations recorded than I would like. If you would like to see updated examples implemented virtually with Unity, you can find those on my <a class="${"gradient-text"}" href="${"/portfolio/unityml"}">Unity project page</a>.</p>
		<iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/bx9dvp-c9IY"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-101dw0f"}"></iframe>
        <iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/jnnQy7Nw3Q0"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-101dw0f"}"></iframe>
		
        
        
        
		${(0, import_index_6b489d84.v)(import_Construction_930e19b6.C, "Construction").$$render($$result, {}, {}, {})}</div>
</div>`;
});
