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
var import_NavbarOther_b7541eba = require("../../../chunks/NavbarOther-b7541eba.js");
var import_Construction_ab4e18b5 = require("../../../chunks/Construction-ab4e18b5.js");
var import_ua_parser_js = require("ua-parser-js");
var import_Contact_8a18bbeb = require("../../../chunks/Contact-8a18bbeb.js");
var unityml_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "ul.svelte-f907jy{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}img.svelte-f907jy{max-height:400px;-o-object-fit:contain;object-fit:contain}.divider.svelte-f907jy{padding:20px;padding-top:60px}h1.svelte-f907jy,h2.svelte-f907jy,h3.svelte-f907jy{margin:20px 20px;font-weight:700}p.svelte-f907jy{text-align:justify}")();
const css = {
  code: "ul.svelte-f907jy{list-style:circle;text-align:left;margin:auto;justify-self:center;width:auto}img.svelte-f907jy{max-height:400px;object-fit:contain}.divider.svelte-f907jy{padding:20px;padding-top:60px}h1.svelte-f907jy,h2.svelte-f907jy,h3.svelte-f907jy{margin:20px 20px;font-weight:700}p.svelte-f907jy{text-align:justify}",
  map: null
};
const Unityml = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Cogs 300 Unity Labs</title>`, ""}<link rel="${"icon"}" href="${"../assets/code_icon.png"}" data-svelte="svelte-nezs4o">`, ""}
${(0, import_index_6b489d84.v)(import_NavbarOther_b7541eba.N, "NavbarOther").$$render($$result, {}, {}, {})}
<div class="${"background bg-base-200 p-5 min-h-screen"}"><div class="${"content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"}"><h1 class="${"text-3xl bold text-center mb-3 svelte-f907jy"}">Cogs 300 Unity Labs</h1>
		<p class="${"text-lg text-center svelte-f907jy"}">A Unity based set of labs and a machine learning tournament designed for use by third year
			university students in Cognitive Systems 300 at the University of British Columbia
		</p>
		<img class="${"max-w-10 m-10 rounded-lg svelte-f907jy"}" src="${"../assets/unity_ml/ML_Agents_scene.png"}" alt="${"unity ml"}">
		

		<a class="${"m-auto btn glow-on-hover uppercase mt-5"}" style="${"width: 250px;"}" href="${"https://github.com/COGS300/lab7to9-robot-tournament"}" target="${"_blank"}">See Code
		</a>

		<h2 class="${"text-2xl bold divider svelte-f907jy"}">The Project</h2>

		<div class="${"tabs tabs-boxed flex justify-center bg-base-300 mb-5"}"><button class="${["tab tab-lg tab-bordered", ""].join(" ").trim()}">Version 1 (2020)
			</button>
			<button class="${["tab tab-lg tab-bordered", "tab-active"].join(" ").trim()}">Version 2 (2022)
			</button></div>

		${`${`<p class="${"svelte-f907jy"}">The ongoing version of the project is a collaboration between the Cogs 300 course and the <a href="${"https://eml.ubc.ca/"}" class="${"gradient-text"}">UBC Emerging Media Lab</a> which began in fall 2022. This version focuses on new content for each of the labs 1 to 6,
				leading up to the robot tournament in labs 7 to 9 (version 1).
			</p>
			<h2 class="${"text-2xl bold divider svelte-f907jy"}">My Role</h2>
			<p class="${"text-center svelte-f907jy"}">I have served as a unity developer, pedagogical advisor, and subject matter expert while
				working with undergraduate students, industry expert advisors, and the professor for the
				course.
			</p>
			<h2 class="${"text-2xl bold divider svelte-f907jy"}">The Problem</h2>
			<p class="${"svelte-f907jy"}">Version 1 of this project was created in a very short timeline during the 2020 transition to
				online content. While functional, this initial solution could be improved upon with more
				time and effort. In version 2, we have decided to mostly focus on redesigning labs 1-6, as
				the robot tournament described in version 1 serves as the remaining labs 7-9 and is in quite
				good shape.
			</p>
			<h2 class="${"text-2xl bold divider svelte-f907jy"}">The Solution</h2>
			<p class="${"svelte-f907jy"}">So far, 4 of the labs have undergone a redesign</p>

			<h3 class="${"text-xl divider svelte-f907jy"}">Lab 2 - Physical Symbol Systems</h3>
			<p class="${"svelte-f907jy"}">Learning Goals:</p>
			<ol class="${"list-decimal list-outside ml-6"}"><li>Students should understand how information can be explicitly represented symbolically
				</li>
				<li>Appreciate how pre-planned movement &amp; instructions can be too inflexible or run into edge
					cases when trying to solve different types of problems
				</li></ol>
			<br>
			<p class="${"svelte-f907jy"}">In the previous version of this lab, students would give a list of instructions to a robot
				arm, which would then rotate in 3D to hit a series of balls. This task was not ideal, as
				students would often be confused by the 3D rotations, which was not part of the learning
				goals.
			</p>
			<br>
			<p class="${"svelte-f907jy"}">In the new version, students have 2 tasks:</p>
			<ol class="${"list-decimal list-outside ml-6"}"><li>provide a list of turning instructions to a virtual car</li>
				<li>Create an algorithm which will decide to turn left or right based off two sensor distance
					inputs
				</li></ol>
			<br>
			<p class="${"svelte-f907jy"}">This new version successfully improves upon teaching the learning goals, as there is less
				confusing extraneous information (3d rotations). It also provides scaffolding for future
				labs 4 and 6, and the robot tournament, which use the same/similar vehicles and movements.
			</p>

			<img class="${"max-w-10 m-10 rounded-lg svelte-f907jy"}" src="${"../assets/unity_ml/Unity Lab 2.gif"}" alt="${"unity ml"}">
			<h3 class="${"text-xl divider svelte-f907jy"}">Lab 3 - Emergence</h3>
			<p class="${"svelte-f907jy"}">Learning Goals:</p>
			<ol class="${"list-decimal list-outside ml-6"}"><li>Students should understand how simple rules can combine to create behaviour which is more
					than the sum of their parts
				</li>
				<li>Understand how slight variations on the rules can have dramatic consequences on the form
					of the final system
				</li></ol>
			<br>
			<p class="${"svelte-f907jy"}">In the previous version of this lab, students would code an algorithm which results in the
				synchronized flashing of several fireflies. However, the underlying algorithm being built on
				was exceptionally slow and as a result could only support 3-6 fireflies total before
				experiencing massive frame rate drops.
			</p>
			<br>
			<p class="${"svelte-f907jy"}">In the new version, we have completely redesigned the underlying algorithm to be more
				efficient, and added in additional flocking behaviour for the fireflies.
			</p>
			<br>
			<p class="${"svelte-f907jy"}">This new version successfully improves upon teaching the learning goals, as students are
				better able to appreciate how behaviour emerges at scale. It also provides additional,
				interactive examples of emergence through the flocking behaviour.
			</p>
			<img class="${"max-w-10 m-10 rounded-lg svelte-f907jy"}" src="${"../assets/unity_ml/Unity Lab 3.gif"}" alt="${"unity ml"}">
			<h3 class="${"text-xl divider svelte-f907jy"}">Lab 4 - Simple Neural Networks</h3>
			<p class="${"svelte-f907jy"}">Learning Goals:</p>
			<ol class="${"list-decimal list-outside ml-6"}"><li>Students should understand how a perceptron behaves as a simple, single-layer neural
					network
				</li>
				<li>Understand how labeled data is used to train a neural network</li>
				<li>Understand the idea of linear separability,</li></ol>
			<br>
			<p class="${"svelte-f907jy"}">In the previous version of this lab, students would train a perceptron to eat or avoid fruit
				depending on attributes like color or if it was rotten. This version of the lab was not very
				transparent or intuitive for students to understand.
			</p>
			<br>
			<p class="${"svelte-f907jy"}">In the new version, students will get a car to navigate through a maze by training a
				perceptron to associate distance sensors with the outputs of turning left or right. Students
				will code part of the algorithm which learns from labeled data and adjusts the weights of
				the perceptron. Afterwards they use the arrow keys to provide the labeled training data set
				to the perceptron.
			</p>
			<br>
			<p class="${"svelte-f907jy"}">This new version successfully improves the learning goals, as the task and how the
				perceptron is trained both become much clearer. It also builds upon the scaffolding in lab 2
				and further prepares them for lab 6, allowing them to compare and contrast different
				approaches to the same problem.
			</p>
			<br>
			<p class="${"svelte-f907jy"}"><b>GIF COMING SOON</b></p>
			<h3 class="${"text-xl divider svelte-f907jy"}">Lab 6 - Embodied Cognition</h3>
			<p class="${"svelte-f907jy"}">Learning Goals:</p>
			<ol class="${"list-decimal list-outside ml-6"}"><li>Students should understand the connection between the form (body) of an agent and its
					function (cognition)
				</li></ol>
			<br>
			<p class="${"svelte-f907jy"}">In the previous version of this lab, students would solve a maze using different movement
				types (sliding vs jumping). However, this was difficult to connect to cognition
				specifically.
			</p>
			<br>
			<p class="${"svelte-f907jy"}">In the new version, students will simulate the behaviour of a paper read in class, where
				robots will &quot;tidy&quot; an arena of cubes by pushing them into piles.
			</p>
			<br>
			<p class="${"svelte-f907jy"}">This new version successfully improves upon teaching the learning goals, as it specifically
				connects to content covered in the lectures and readings for the course, and more accurately
				simulates embodied cognition.
			</p>
			<img class="${"max-w-10 m-10 rounded-lg svelte-f907jy"}" src="${"../assets/unity_ml/Unity Lab 6.gif"}" alt="${"unity ml"}">
			${(0, import_index_6b489d84.v)(import_Construction_ab4e18b5.C, "Construction").$$render($$result, {}, {}, {})}`}`}</div>
</div>`;
});
