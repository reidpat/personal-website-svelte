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
  default: () => Evolvingcyborgs
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("../../../chunks/index-6b489d84.js");
var import_NavbarOther_bf166992 = require("../../../chunks/NavbarOther-bf166992.js");
var import_Contact_8a18bbeb = require("../../../chunks/Contact-8a18bbeb.js");
var evolvingcyborgs_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "ul.svelte-7o0nbe{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}iframe.svelte-7o0nbe{margin:20px auto;width:60%;min-width:200px;height:300px}.drawing-slides.svelte-7o0nbe{margin:0px auto}img.svelte-7o0nbe{max-height:400px;-o-object-fit:contain;object-fit:contain}.divider.svelte-7o0nbe{padding:20px;padding-top:60px}h1.svelte-7o0nbe,h2.svelte-7o0nbe,h3.svelte-7o0nbe,h4.svelte-7o0nbe{margin:20px 20px;font-weight:700}")();
const css = {
  code: "ul.svelte-7o0nbe{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}iframe.svelte-7o0nbe{margin:20px auto;width:60%;min-width:200px;height:300px}.drawing-slides.svelte-7o0nbe{margin:0px auto}img.svelte-7o0nbe{max-height:400px;object-fit:contain}.divider.svelte-7o0nbe{padding:20px;padding-top:60px}h1.svelte-7o0nbe,h2.svelte-7o0nbe,h3.svelte-7o0nbe,h4.svelte-7o0nbe{margin:20px 20px;font-weight:700}",
  map: null
};
const Evolvingcyborgs = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Evolving Cyborgs</title>`, ""}<link rel="${"icon"}" href="${"../assets/code_icon.png"}" data-svelte="svelte-x415ln">`, ""}
${(0, import_index_6b489d84.v)(import_NavbarOther_bf166992.N, "NavbarOther").$$render($$result, {}, {}, {})}
<div class="${"background bg-base-200 p-10 min-h-screen"}"><div class="${"content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"}"><h1 class="${"text-3xl bold text-center mb-3 svelte-7o0nbe"}">Evolving Cyborgs</h1>
		<p class="${"text-lg text-center"}">A better gamified habit tracker</p>
		<img class="${"max-w-10 m-10 rounded-lg svelte-7o0nbe"}" src="${"../assets/EvolvingCyborgs.jpg"}" alt="${""}">
		<a class="${"m-auto"}" href="${"https://github.com/reidpat/evolving-cyborgs-svelte"}" target="${"_blank"}"><button class="${"glow-on-hover pl-3 pr-3"}">See Code</button></a>
		<h2 class="${"text-2xl bold divider svelte-7o0nbe"}">My Role</h2>
		<p class="${"text-center"}">Owner, designer and sole creator of a personal project</p>
		<h2 class="${"text-2xl bold divider svelte-7o0nbe"}">The Problem</h2>
		<p class="${"mb-5"}">I&#39;ve always enjoyed playing video games but the older I get, the more frustrating it feels to
			only be able to affect the digital world. I wanted to find a way that I could still feel like
			I&#39;m playing a game, but do it in the physical world. In my searching for a solution to this
			problem, I began to learn about gamified habit trackers.
		</p>
		<h3 class="${"text-lg bold svelte-7o0nbe"}">What is a gamified habit tracker?</h3>
		<p class="${"mb-5"}">Gamified habit trackers are a genre of app in which elements from video games (such as
			experience, levels, acheievements and character stats) are used to provide additional
			motivation to the user to help them complete real world tasks.
		</p>
		<h3 class="${"text-lg bold svelte-7o0nbe"}">Why existing apps didn&#39;t work</h3>
		<p class="${"mb-10"}">I couldn&#39;t find any apps out there which worked for me. I kept running into one of the
			following problems:
		</p>
		<div class="${"tabs tabs-boxed flex justify-center bg-base-300 mb-5"}"><button class="${["tab tab-lg tab-bordered", "tab-active"].join(" ").trim()}">1. Feedback</button>
			<button class="${["tab tab-lg tab-bordered", ""].join(" ").trim()}">2. Platform</button>
			<button class="${["tab tab-lg tab-bordered", ""].join(" ").trim()}">3. Customization</button></div>
		${`<p>Giving rewards and punishments is one of the most effective known ways of creating behaviour
				change as it causes positive and negative associations with a specific behaviour. But if you
				are not careful with your timing of feedback, you can easily cause counterproductive
				situations. I found many apps were not careful with this feedback.
			</p>
			<p>For example, they would punish the user (usually by losing health, gold, or experience) when
				something like a habit was not completed. The issue here is that this punishment was applied
				the <i>next</i> time a user would log in. This made it easy to avoid the punishment simply by
				avoiding using the app.
			</p>`}

		<h2 class="${"text-2xl bold divider svelte-7o0nbe"}">The Solution</h2>
		<p class="${"mb-5"}">I decided that the only way of solving these problems is if I made an application myself. This
			project is what originally encouraged me to learn web development
		</p>
		<div class="${"tabs tabs-boxed flex justify-center bg-base-300 mb-5"}"><button class="${["tab tab-lg tab-bordered", ""].join(" ").trim()}">Version 1</button>
			<button class="${["tab tab-lg tab-bordered", ""].join(" ").trim()}">Version 2</button>
			<button class="${["tab tab-lg tab-bordered", "tab-active"].join(" ").trim()}">Version 3</button></div>

		${`${`<div class="${"text-center"}"><p>Timeline: Jan 2022 - Present</p>
				<h4 class="${"svelte-7o0nbe"}">Technology Used</h4>
				<ul class="${"max-w-sm svelte-7o0nbe"}"><li>Svelte (frontend)</li>
					<li>Supabase (backend)</li></ul>

				<h4 class="${"svelte-7o0nbe"}">Design Process</h4>
				<div class="${"text-left mt-5"}"><p>After my issues with structuring data on Firebase, I decided to rebuild the app using
						Supabase instead. This required a total overhaul of how data was processed and stored.
						Around this same time, I found myself experimenting with Svelte - an frontend
						alternative to Vue. I quickly fell in love with Svelte and I decided to use it to create
						the app instead of Vue.
					</p>
					<p>These two factors combined resulted in the need to do a complete rewrite of the existing
						code. The existing UI/UX for the app stayed nearly identical, as there were no issues
						with this area and Svelte code looks and performs quite similarly to Vue, meaning there
						were large sections of my code that I was able to reuse after making minor edits. This
						resulted in a design process that mostly involved thinking about how to structure the
						data in a way that wouldn&#39;t cause me problems in the future when I wanted to add more
						features.
					</p></div>
                <h4 class="${"svelte-7o0nbe"}">Final Product</h4>
                <img class="${"max-w-6 m-auto rounded-lg svelte-7o0nbe"}" src="${"../assets/EvolvingCyborgs.jpg"}" alt="${""}">
                <p class="${"mt-5"}">I&#39;ve been very happy with the progress I&#39;ve made on this project. It&#39;s now almost at the point where I left off with Version 2, but I don&#39;t feel nearly as limited with my data structure.</p>
                <h4 class="${"svelte-7o0nbe"}">Features</h4>
                <ul class="${"max-w-xl svelte-7o0nbe"}"><li>Habit Tracker - Now with dynamically adjusting goals!</li>
					<li>Vices - time since last performed an action you are trying to stop</li>
					<li>Friends list showing their level and current experience</li></ul>
                <div class="${"text-left"}"><h3 class="${"divider text-2xl text svelte-7o0nbe"}">V3 Roadmap</h3>
                    <p>Version 3 of this project is under active development and so far there have been no major issues that require reflection. I am planning on continuing development and adding the following features:</p>
                    <ul class="${"max-w-xl text-left justify-self-start svelte-7o0nbe"}"><li>Achievements and Badges - Show off to your friends what you have accomplished!</li>
                        <li>Activities - Track specific behaviour occurances which may not happen every day, or happen multiple times a day</li>
                        <li>Custom Data tracking - Building off the activites above, modify it to us custom data types allowing tracking of any information desired</li>
                        <li>Attributes - Game-like stats which are leveled as you complete various actions</li></ul></div></div>`}`}</div>
</div>`;
});
