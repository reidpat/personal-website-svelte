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
  default: () => Techtracker
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../../chunks/index-6b489d84.js");
var import_NavbarOther_80ea6fbd = require("../../../chunks/NavbarOther-80ea6fbd.js");
var import_Construction_930e19b6 = require("../../../chunks/Construction-930e19b6.js");
var import_Contact_8a18bbeb = require("../../../chunks/Contact-8a18bbeb.js");
const Techtracker = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Tech Tracker</title>`, ""}<link rel="${"icon"}" href="${"../assets/code_icon.png"}" data-svelte="svelte-1wezr7k">`, ""}
${(0, import_index_6b489d84.v)(import_NavbarOther_80ea6fbd.N, "NavbarOther").$$render($$result, {}, {}, {})}
<div class="${"background bg-base-200 p-10 min-h-screen"}"><div class="${"content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"}"><h1 class="${"text-3xl bold text-center mb-3"}">Tech Tracker</h1>
		<img class="${"max-w-10 m-10 rounded-lg"}" src="${"../assets\\TechTracker.jpg"}" alt="${"unity ml"}">
		<h2 class="${"text-2xl bold divider"}">My Role</h2>
		<p class="${"text-center"}">Project lead and mentor on a team of 2</p>
		<h2 class="${"text-2xl bold divider"}">The Problem</h2>
		<p>Geering Up has over 200 laptops and a plethora of other small tech like arduinos which are all
			used during our summer camps season. Coordinating and securing this technology has become a
			full time job.
		</p>
		<p>Techonology frequently changes hands during a day of camps and with over 50 instructors, it
			can be a pain to figure out who is using something at a given time. In the past instructors
			would have to contact the Technology Student Assistant (Tech SA) who could look at a physical
			sign out sheet in order to determine who had what tech signed out. This process was exhausing
			for both instructors and the Tech SA being contacted.
		</p>
		<p>When I worked in the Tech SA position myself in 2019, I developed an online sign in/out
			solution which utilised Google forms and Google sheets in order to track where things were in
			realtime. This solution worked, but felt clunky and there were frequently data entry errors
			which then had to be fixed manually.
		</p>
		<h2 class="${"text-2xl bold divider"}">The Solution</h2>
		<p>Now in 2022 (after two years of reduced camp sizes where this technology was not needed) it
			was time for a version 2 of the tech tracking software.
		</p>
		<p>I pitched the idea, and then got to work with the new Tech SA on planning the project. As this
			was their first time doing web development, it was my responsibility to play as the senior
			developer for this project. This meant doing all the initial setup for the project -
			initializing the code framework, creating a database, and setting up hosting. I also created a
			skeleton version project with a few examples of database calls and displaying the data with
			the purpose of helping the new Tech SA, as it would become their job to finish the project.
		</p>
		<p>After that initial setup, I transitioned to more of a mentor and supervisor role, where I
			helped with architecting data structures and assisted with debugging the program
		</p>
		${(0, import_index_6b489d84.v)(import_Construction_930e19b6.C, "Construction").$$render($$result, {}, {}, {})}</div></div>`;
});
