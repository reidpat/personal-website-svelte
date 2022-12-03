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
var import_NavbarOther_bf166992 = require("../../../chunks/NavbarOther-bf166992.js");
var import_Contact_8a18bbeb = require("../../../chunks/Contact-8a18bbeb.js");
const UnityUserDemo = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"unity-container"}" class="${"unity-desktop"}"><canvas id="${"unity-canvas"}" width="${"960"}" height="${"600"}"></canvas>
    <div id="${"unity-loading-bar"}"><div id="${"unity-logo"}"></div>
      <div id="${"unity-progress-bar-empty"}"><div id="${"unity-progress-bar-full"}"></div></div></div>
    <div id="${"unity-warning"}"></div>
    <div id="${"unity-footer"}"><div id="${"unity-webgl-logo"}"></div>
      <div id="${"unity-fullscreen-button"}"></div>
      <div id="${"unity-build-title"}">Final Project Testing V2</div></div>
  </div>`;
});
var unityml_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "ul.svelte-7o0nbe{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}iframe.svelte-7o0nbe{margin:20px auto;width:60%;min-width:200px;height:300px}img.svelte-7o0nbe{max-height:400px;-o-object-fit:contain;object-fit:contain}.divider.svelte-7o0nbe{padding:20px;padding-top:60px}h1.svelte-7o0nbe,h2.svelte-7o0nbe,h3.svelte-7o0nbe{margin:20px 20px;font-weight:700}")();
const css = {
  code: "ul.svelte-7o0nbe{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}iframe.svelte-7o0nbe{margin:20px auto;width:60%;min-width:200px;height:300px}img.svelte-7o0nbe{max-height:400px;object-fit:contain}.divider.svelte-7o0nbe{padding:20px;padding-top:60px}h1.svelte-7o0nbe,h2.svelte-7o0nbe,h3.svelte-7o0nbe{margin:20px 20px;font-weight:700}",
  map: null
};
const Unityml = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Unity ML</title>`, ""}<link rel="${"icon"}" href="${"../assets/code_icon.png"}" data-svelte="svelte-1dzzhpi">`, ""}
${(0, import_index_6b489d84.v)(import_NavbarOther_bf166992.N, "NavbarOther").$$render($$result, {}, {}, {})}
<div class="${"background bg-base-200 p-10 min-h-screen"}"><div class="${"content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"}"><h1 class="${"text-3xl bold text-center mb-3 svelte-7o0nbe"}">Unity ML Agents</h1>
		<p class="${"tetx-lg text-center"}">A Unity based machine learning tournament designed for use by third year university students
			in Cognitve Systems 300 at the University of British Columbia
		</p>
		<img class="${"max-w-10 m-10 rounded-lg svelte-7o0nbe"}" src="${"../assets/unity_ml/ML_Agents_scene.png"}" alt="${"unity ml"}">

		${(0, import_index_6b489d84.v)(UnityUserDemo, "UnityUserDemo").$$render($$result, {}, {}, {})}

		<h2 class="${"text-2xl bold divider svelte-7o0nbe"}">My Role</h2>
		<p class="${"mb-5"}">Lead developer on team of 2 teaching assistant students, done in collaboration with the
			professor of the course. This projects was completed 100% asynchronously and online, with
			minimal oversight from the professor.
		</p>
		<h2 class="${"text-2xl bold divider svelte-7o0nbe"}">The Problem</h2>

		<p>With the transition to an online-only teaching structure due to covid-19, the UBC course
			Cognitive Systems 300 could no longer use the existing in-person labs which involved the
			creation of physical robots using Arduinos. Myself, along with another student were hired to
			design a set of new labs using Unity, a game design software. These labs culminate in a final
			project where the students could apply the knowledge they had learned in labs and lectures.
		</p>

		<h2 class="${"text-2xl bold divider svelte-7o0nbe"}">The Solution</h2>

		<h3 class="${"text-lg bold svelte-7o0nbe"}">Unity Machine Learning Agents</h3>
		<p>We decided to use a new piece of software for the term project. We were already using Unity as
			our main tool, so we were very excited to learn that they launched version 1.0 of ML Agents
			earlier in the year. ML Agents is a machine learning API designed for interfacing with custom
			environments made in Unity. It uses PyTorch in the backend, but provides easy methods to
			interact with these tools within the unity code in a way which does not require a depth of
			previous machine learning or mathematics experience. This allows for the training of
			intelligent agent models in a way that is beginner friendly.
		</p>
		<a href="${"https://github.com/Unity-Technologies/ml-agents/blob/main/docs/ML-Agents-Overview.md"}" target="${"blank"}" class="${"link link-secondary"}">Learn more about Unity ML Agents
		</a>

		<h3 class="${"text-lg bold svelte-7o0nbe"}">What did the tournament involve?</h3>
		<p class="${"mb-5"}">We created a Unity environment in which each team of 4 students would create an intelligent
			agent which would autonomously compete in a 1v1 elimination tournament based on a capture the
			flag game. Both teams in a match had a home base, in which the goal was to carry as many of
			the 9 targets available back to their base. Whoever ended the 2 minute match with more targets
			in their base would win the match and advance. Each agent had a short range laser which would
			stun opponents and cause them to drop any targets they were carrying.
		</p>

		<h3 class="${"text-lg bold svelte-7o0nbe"}">Design Process</h3>
		<p>We wanted to give the students hands on experience with training an intelligent agent, and we
			wanted to do it in a way that had a low floor, but a high ceiling. This way, the students who
			weren&#39;t as proficient at coding could participate without it being too punishing, but those
			who wished to go deeper and wanted to win the tournament had lots of room to do so.
		</p>
		<p>We decided the best way to do this was to provide a framework for the students to build off
			of. So we created a class for them called Cogs Agent which included things like basic
			movement, shooting and object interaction. The students could then extend this class and build
			their own, more complex behaviours off of our simple ones.
		</p>
		<p>Due to time constraints and immovable deadlines (can&#39;t teach a lab with no content!), there
			wasn&#39;t a lot of room for prototyping or testing this one - we were thrown to the wolves and
			the students were our ginuea pig testers.
		</p>
		<h3 class="${"text-lg bold svelte-7o0nbe"}">Final Product</h3>
		<p>This tournament was run during the final lecture for Cogs 300 in both the fall (Sep-Dec) and
			winter (Jan - Apr) terms. It was a resounding success both times, with the students enjoying
			themselves and learning lots.
		</p>
		<p>Unknown to the students, I also developed a TA bot to compete in the tournament, using the
			same limitations and rules the students were subject to. Below is a video showing the TA bot
			facing off against the tournament winner from the students, commentated by myself.
		</p>
		<iframe src="${"https://www.youtube.com/embed/dUhDrbfb-1U"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-7o0nbe"}"></iframe>

		<h2 class="${"text-2xl bold divider svelte-7o0nbe"}">Reflections</h2>
		<h3 class="${"text-lg bold svelte-7o0nbe"}">Feedback</h3>
		<p>The feedback we received on this project was overwhelmingly positive. We had a lot of buy-in
			from the students, which is notable due to the fact that student engagement was difficult to
			create during online-only teaching.
		</p>
		<p class="${"quotation"}">&quot;Thank you so much for not only keeping COGS 300 alive during these challenging times, but
			thriving and evolving.&quot; <br>
			- Cogs Course Coordinator
		</p>
		<h3 class="${"text-lg bold svelte-7o0nbe"}">Lessons Learned</h3>
		<ul class="${"svelte-7o0nbe"}"><li>Pay more attention to dependencies. Some students (especially M1 mac users) had difficulties
				with the version of ML Agents and couldn&#39;t import their trained models. Understandably, this
				was frustrating for students, though it&#39;s effect was slightly mitigated due to them being in
				groups of 4 for the project.
			</li>
			<li>Make the installation process easier. Much of the installation of Unity ML must be done
				through the command line, which can be intimidating to students who have never used it
				before. Creating an install script for the students could reduce stress and errors in the
				install process.
			</li>
			<li>Adding more abilities/options to the agents would allow more varied strategy and gameplay.
				Instead of lasers there could be projectiles, which would add depth to the targeting
				algorithms. Adding obstacles, or other features to the arena would vary movement strategies.
				Creating different options for bots such as slower moving but tougher vs faster moving but
				fragile would allow greater customization and variation in strategies.
			</li></ul></div>
</div>`;
});
