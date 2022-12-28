<script>
	import NavbarOther from '../../sections/NavbarOther.svelte';
	import Construction from '../../components/Construction.svelte';
	import UnityUserDemo from '../../components/UnityUserDemo.svelte';
	import DeviceDetector from 'svelte-device-detector';

	let demo = false;

	function toggleDemo() {
		demo = !demo;
		console.log(demo);
	}

	let versionSelect = 2;
</script>

<svelte:head>
	<title>Unity ML</title>
	<link rel="icon" href="../assets/code_icon.png" />
</svelte:head>
<NavbarOther />
<div class="background bg-base-200 p-5 min-h-screen">
	<div
		class="content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left
		text-lg, max-w-4xl"
	>
		<h1 class="text-3xl bold text-center mb-3">Unity ML Agents</h1>
		<p class="text-lg text-center">
			A Unity based set of labs and a machine learning tournament designed for use by third year university students
			in Cognitive Systems 300 at the University of British Columbia
		</p>
		<img
			class="max-w-10 m-10 rounded-lg"
			src="../assets/unity_ml/ML_Agents_scene.png"
			alt="unity ml"
		/>
		<!-- <DeviceDetector showInDevice="desktop">
			<div class="flex flex-col justify-center align-center">
				<div
					class="tooltip"
					data-tip="Arrow keys to move, space to shoot. Capture more balls to win!">
					<button class="btn uppercase mb-5">How do I play?</button>
				</div>
				{#if demo}
					<div
						class="m-auto btn glow-on-hover uppercase mb-5"
						style="max-width: 250px;"
						on:click={() => toggleDemo()}>
						Stop Demo
					</div>
					<UnityUserDemo />
				{:else}
					<div
						class="m-auto btn glow-on-hover uppercase"
						style="width: 250px;"
						on:click={() => toggleDemo()}>
						Play Demo
					</div>
				{/if}

			</div>
		</DeviceDetector>
		<DeviceDetector showInDevice="mobile">
			<button class="btn btn-disabled red-glow m-auto glow-on-hover uppercase mb-5" style="width: 250px">
				Switch to Desktop for demo
			</button>
		</DeviceDetector> -->

		<a
			class="m-auto btn glow-on-hover uppercase mt-5"
			style="width: 250px;"
			href="https://github.com/COGS300/lab7to9-robot-tournament"
			target="_blank"
		>
			See Code
		</a>

		<h2 class="text-2xl bold divider">The Project</h2>

		<div class="tabs tabs-boxed flex justify-center bg-base-300 mb-5">
			<button
				on:click={() => {
					versionSelect = 1;
				}}
				class:tab-active={versionSelect === 1}
				class="tab tab-lg tab-bordered"
			>
				Version 1 (2020)
			</button>
			<button
				on:click={() => {
					versionSelect = 2;
				}}
				class:tab-active={versionSelect === 2}
				class="tab tab-lg tab-bordered"
			>
				Version 2 (2022)
			</button>
		</div>

		{#if versionSelect == 1}
		
		<div>
			<p class="text-center">The original project, completed in fall 2020. This version focuses on machine learning tournament.</p>
			<h2 class="text-2xl bold divider">My Role</h2>
			<p class="mb-5">
				Lead developer on team of 2 teaching assistant students, done in collaboration with the
				professor of the course. This projects was completed 100% asynchronously and online, with
				minimal oversight from the professor.
			</p>
			<h2 class="text-2xl bold divider">The Problem</h2>

			<p>
				With the transition to an online-only teaching structure due to covid-19, the UBC course
				Cognitive Systems 300 could no longer use the existing in-person labs which involved the
				creation of physical robots using Arduinos. Myself, along with another student were hired to
				design a set of new labs using Unity, a game design software. These labs culminate in a
				final project where the students could apply the knowledge they had learned in labs and
				lectures.
			</p>

			<h2 class="text-2xl bold divider">The Solution</h2>

			<h3 class="text-lg bold">Unity Machine Learning Agents</h3>
			<p>
				We decided to use a new piece of software for the term project. We were already using Unity
				as our main tool, so we were very excited to learn that they launched version 1.0 of ML
				Agents earlier in the year. ML Agents is a machine learning API designed for interfacing
				with custom environments made in Unity. It uses PyTorch in the backend, but provides easy
				methods to interact with these tools within the unity code in a way which does not require a
				depth of previous machine learning or mathematics experience. This allows for the training
				of intelligent agent models in a way that is beginner friendly.
			</p>
			<a
				href="https://github.com/Unity-Technologies/ml-agents/blob/main/docs/ML-Agents-Overview.md"
				target="blank"
				class="link link-secondary"
			>
				Learn more about Unity ML Agents
			</a>

			<h3 class="text-lg bold">What did the tournament involve?</h3>
			<p class="mb-5">
				We created a Unity environment in which each team of 4 students would create an intelligent
				agent which would autonomously compete in a 1v1 elimination tournament based on a capture
				the flag game. Both teams in a match had a home base, in which the goal was to carry as many
				of the 9 targets available back to their base. Whoever ended the 2 minute match with more
				targets in their base would win the match and advance. Each agent had a short range laser
				which would stun opponents and cause them to drop any targets they were carrying.
			</p>

			<h3 class="text-lg bold">Design Process</h3>
			<p>
				We wanted to give the students hands on experience with training an intelligent agent, and
				we wanted to do it in a way that had a low floor, but a high ceiling. This way, the students
				who weren't as proficient at coding could participate without it being too punishing, but
				those who wished to go deeper and wanted to win the tournament had lots of room to do so.
			</p>
			<p>
				We decided the best way to do this was to provide a framework for the students to build off
				of. So we created a class for them called Cogs Agent which included things like basic
				movement, shooting and object interaction. The students could then extend this class and
				build their own, more complex behaviours off of our simple ones.
			</p>
			<p>
				Due to time constraints and immovable deadlines (can't teach a lab with no content!), there
				wasn't a lot of room for prototyping or testing this one - we were thrown to the wolves and
				the students were our ginuea pig testers.
			</p>
			<h3 class="text-lg bold">Final Product</h3>
			<p>
				This tournament was run during the final lecture for Cogs 300 in both the fall (Sep-Dec) and
				winter (Jan - Apr) terms. It was a resounding success both times, with the students enjoying
				themselves and learning lots.
			</p>
			<p>
				Unknown to the students, I also developed a TA bot to compete in the tournament, using the
				same limitations and rules the students were subject to. Below is a video showing the TA bot
				facing off against the tournament winner from the students, commentated by myself.
			</p>
			<!-- <iframe
			src="https://www.youtube.com/embed/dUhDrbfb-1U"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/> -->

			<h2 class="text-2xl bold divider">Reflections</h2>
			<h3 class="text-lg bold">Feedback</h3>
			<p>
				The feedback we received on this project was overwhelmingly positive. We had a lot of buy-in
				from the students, which is notable due to the fact that student engagement was difficult to
				create during online-only teaching.
			</p>
			<p class="quotation">
				"Thank you so much for not only keeping COGS 300 alive during these challenging times, but
				thriving and evolving."
				<br />
				- Cogs Course Coordinator
			</p>
			<h3 class="text-lg bold">Lessons Learned</h3>
			<ul>
				<li>
					Pay more attention to dependencies. Some students (especially M1 mac users) had
					difficulties with the version of ML Agents and couldn't import their trained models.
					Understandably, this was frustrating for students, though it's effect was slightly
					mitigated due to them being in groups of 4 for the project.
				</li>
				<li>
					Make the installation process easier. Much of the installation of Unity ML must be done
					through the command line, which can be intimidating to students who have never used it
					before. Creating an install script for the students could reduce stress and errors in the
					install process.
				</li>
				<li>
					Adding more abilities/options to the agents would allow more varied strategy and gameplay.
					Instead of lasers there could be projectiles, which would add depth to the targeting
					algorithms. Adding obstacles, or other features to the arena would vary movement
					strategies. Creating different options for bots such as slower moving but tougher vs
					faster moving but fragile would allow greater customization and variation in strategies.
				</li>
			</ul>
		</div>
		{:else if versionSelect == 2}
		<p>The ongoing version of the project which began in fall 2022. This version focuses on new content for each of the labs leading up to the final project</p>
		<h2 class="text-2xl bold divider">My Role</h2>
		<h2 class="text-2xl bold divider">The Problem</h2>
		<h2 class="text-2xl bold divider">The Solution</h2>
		<img
			class="max-w-10 m-10 rounded-lg"
			src="../assets/unity_ml/Unity Lab 2.gif"
			alt="unity ml"
		/>
		<img
			class="max-w-10 m-10 rounded-lg"
			src="../assets/unity_ml/Unity Lab 3.gif"
			alt="unity ml"
		/>
		<img
			class="max-w-10 m-10 rounded-lg"
			src="../assets/unity_ml/Unity Lab 6.gif"
			alt="unity ml"
		/>
		<Construction />
		{/if}
	</div>
</div>

<style>
	ul {
		list-style: circle;
		text-align: left;
		margin: auto;
		justify-self: center;
		width: auto;
	}
	iframe {
		margin: 20px auto;
		width: 60%;
		min-width: 200px;
		height: 300px;
	}
	.drawing-slides {
		margin: 0px auto;
	}
	img {
		max-height: 400px;
		object-fit: contain;
	}
	.divider {
		padding: 20px;
		padding-top: 60px;
	}
	h1,
	h2,
	h3,
	h4 {
		margin: 20px 20px;
		font-weight: 700;
	}
	p {
		text-align: justify;
	}
</style>
