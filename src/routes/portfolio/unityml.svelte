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
	<title>Cogs 300 Unity Labs</title>
	<link rel="icon" href="../assets/code_icon.png" />
</svelte:head>
<NavbarOther />
<div class="background bg-base-200 p-5 min-h-screen">
	<div
		class="content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left
		text-lg, max-w-4xl"
	>
		<h1 class="text-3xl bold text-center mb-3">Cogs 300 Unity Labs</h1>
		<p class="text-lg text-center">
			A Unity based set of labs and a machine learning tournament designed for use by third year
			university students in Cognitive Systems 300 at the University of British Columbia
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
				<p class="text-center">
					The original project, completed in fall 2020. This version focuses on labs 7 to 9 - the
					machine learning tournament.
				</p>
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
					creation of physical robots using Arduinos. Myself, along with another student were hired
					to design a set of new labs using Unity, a game design software. These labs culminate in a
					final project where the students could apply the knowledge they had learned in labs and
					lectures.
				</p>

				<h2 class="text-2xl bold divider">The Solution</h2>

				<h3 class="text-lg bold">Unity Machine Learning Agents</h3>
				<p>
					We decided to use a new piece of software for the term project. We were already using
					Unity as our main tool, so we were very excited to learn that they launched version 1.0 of
					ML Agents earlier in the year. ML Agents is a machine learning API designed for
					interfacing with custom environments made in Unity. It uses PyTorch in the backend, but
					provides easy methods to interact with these tools within the unity code in a way which
					does not require a depth of previous machine learning or mathematics experience. This
					allows for the training of intelligent agent models in a way that is beginner friendly.
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
					We created a Unity environment in which each team of 4 students would create an
					intelligent agent which would autonomously compete in a 1v1 elimination tournament based
					on a capture the flag game. Both teams in a match had a home base, in which the goal was
					to carry as many of the 9 targets available back to their base. Whoever ended the 2 minute
					match with more targets in their base would win the match and advance. Each agent had a
					short range laser which would stun opponents and cause them to drop any targets they were
					carrying.
				</p>

				<h3 class="text-lg bold">Design Process</h3>
				<p>
					We wanted to give the students hands on experience with training an intelligent agent, and
					we wanted to do it in a way that had a low floor, but a high ceiling. This way, the
					students who weren't as proficient at coding could participate without it being too
					punishing, but those who wished to go deeper and wanted to win the tournament had lots of
					room to do so.
				</p>
				<p>
					We decided the best way to do this was to provide a framework for the students to build
					off of. So we created a class for them called Cogs Agent which included things like basic
					movement, shooting and object interaction. The students could then extend this class and
					build their own, more complex behaviours off of our simple ones.
				</p>
				<p>
					Due to time constraints and immovable deadlines (can't teach a lab with no content!),
					there wasn't a lot of room for prototyping or testing this one - we were thrown to the
					wolves and the students were our ginuea pig testers.
				</p>
				<h3 class="text-lg bold">Final Product</h3>
				<p>
					This tournament was run during the final lecture for Cogs 300 in both the fall (Sep-Dec)
					and winter (Jan - Apr) terms. It was a resounding success both times, with the students
					enjoying themselves and learning lots.
				</p>
				<p>
					Unknown to the students, I also developed a TA bot to compete in the tournament, using the
					same limitations and rules the students were subject to. Below is a video showing the TA
					bot facing off against the tournament winner from the students, commentated by myself.
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
					The feedback we received on this project was overwhelmingly positive. We had a lot of
					buy-in from the students, which is notable due to the fact that student engagement was
					difficult to create during online-only teaching.
				</p>
				<p class="quotation">
					"Thank you so much for not only keeping COGS 300 alive during these challenging times, but
					thriving and evolving."
					<br />
					- Cogs Course Coordinator
				</p>
				<h3 class="text-lg bold">Lessons Learned</h3>
				<ul class="list-inside list-disc">
					<li>
						Pay more attention to dependencies. Some students (especially M1 mac users) had
						difficulties with the version of ML Agents and couldn't import their trained models.
						Understandably, this was frustrating for students, though it's effect was slightly
						mitigated due to them being in groups of 4 for the project.
					</li>
					<li>
						Make the installation process easier. Much of the installation of Unity ML must be done
						through the command line, which can be intimidating to students who have never used it
						before. Creating an install script for the students could reduce stress and errors in
						the install process.
					</li>
					<li>
						Adding more abilities/options to the agents would allow more varied strategy and
						gameplay. Instead of lasers there could be projectiles, which would add depth to the
						targeting algorithms. Adding obstacles, or other features to the arena would vary
						movement strategies. Creating different options for bots such as slower moving but
						tougher vs faster moving but fragile would allow greater customization and variation in
						strategies.
					</li>
				</ul>
		{:else if versionSelect == 2}
			<h3 class="text-xl divider">Project Overview:</h3>
			<p>
				The ongoing project, a collaboration between the Cogs 300 course and the UBC Emerging Media
				Lab, aims to enhance the learning experience and outcomes of the robotics labs. My role in
				this project involved serving as a Unity developer, pedagogical advisor, and subject matter
				expert. Working with undergraduate students, industry expert advisors, and the course
				professor, we embarked on redesigning labs 1 to 6 and preparing for the robot tournament in
				labs 7 to 9.
			</p>

			<h3 class="text-l divider">Lab 2 - Physical Symbol Systems</h3>
			<h4>Learning Goals:</h4>
			<ol class="list-decimal list-outside ml-6">
				<li>
					Students should understand how information can be explicitly represented symbolically
				</li>
				<li>
					Appreciate how pre-planned movement & instructions can be too inflexible or run into edge
					cases when trying to solve different types of problems
				</li>
			</ol>
			<br />
			<p>
				In the previous version of this lab, students would give a list of instructions to a robot
				arm, which would then rotate in 3D to hit a series of balls. This task was not ideal, as
				students would often be confused by the 3D rotations, which was not part of the learning
				goals.
			</p>
			<br />
			<h4>In the new version, students have 2 tasks:</h4>
			<ol class="list-decimal list-outside ml-6">
				<li>provide a list of turning instructions to a virtual car</li>
				<li>
					Create an algorithm which will decide to turn left or right based off two sensor distance
					inputs
				</li>
			</ol>
			<br />
			<p>
				This new version successfully improves upon teaching the learning goals, as there is less
				confusing extraneous information (3d rotations). It also provides scaffolding for future
				labs 4 and 6, and the robot tournament, which use the same/similar vehicles and movements.
			</p>

			<img
				class="max-w-10 m-10 rounded-lg"
				src="../assets/unity_ml/2 Self Driving.gif"
				alt="unity ml"
			/>
			<h3 class="text-l divider">Lab 3 - Emergence</h3>
			<h4>Learning Goals:</h4>
			<ol class="list-decimal list-outside ml-6">
				<li>
					Students should understand how simple rules can combine to create behaviour which is more
					than the sum of their parts
				</li>
				<li>
					Understand how slight variations on the rules can have dramatic consequences on the form
					of the final system
				</li>
			</ol>
			<br />
			<p>
				In the previous version of this lab, students would code an algorithm which results in the
				synchronized flashing of several fireflies. However, the underlying algorithm being built on
				was exceptionally slow and as a result could only support 3-6 fireflies total before
				experiencing massive frame rate drops.
			</p>
			<br />
			<p>
				In the new version, we have completely redesigned the underlying algorithm to be more
				efficient, and added in additional flocking behaviour for the fireflies.
			</p>
			<br />
			<p>
				This new version successfully improves upon teaching the learning goals, as students are
				better able to appreciate how behaviour emerges at scale. It also provides additional,
				interactive examples of emergence through the flocking behaviour.
			</p>
			<img
				class="max-w-10 m-10 rounded-lg"
				src="../assets/unity_ml/3 firefly.gif"
				alt="unity ml"
			/>
			<h3 class="text-l divider">Lab 4 - Simple Neural Networks</h3>
			<h4>Learning Goals:</h4>
			<ol class="list-decimal list-outside ml-6">
				<li>
					Students should understand how a perceptron behaves as a simple, single-layer neural
					network
				</li>
				<li>Understand how labeled data is used to train a neural network</li>
				<li>Understand the idea of linear separability,</li>
			</ol>
			<br />
			<p>
				In the previous version of this lab, students would train a perceptron to eat or avoid fruit
				depending on attributes like color or if it was rotten. This version of the lab was not very
				transparent or intuitive for students to understand.
			</p>
			<br />
			<p>
				In the new version, students will get a car to navigate through a maze by training a
				perceptron to associate distance sensors with the outputs of turning left or right. Students
				will code part of the algorithm which learns from labeled data and adjusts the weights of
				the perceptron. Afterwards they use the arrow keys to provide the labeled training data set
				to the perceptron.
			</p>
			<br />
			<p>
				This new version successfully improves the learning goals, as the task and how the
				perceptron is trained both become much clearer. It also builds upon the scaffolding in lab 2
				and further prepares them for lab 6, allowing them to compare and contrast different
				approaches to the same problem.
			</p>
			<br />
			<img
				class="max-w-10 m-10 rounded-lg"
				src="../assets/unity_ml/4 Perceptron.gif"
				alt="unity ml"
			/>
			<h3 class="text-l divider">Lab 6 - Embodied Cognition</h3>
			<h4>Learning Goals:</h4>
			<ol class="list-decimal list-outside ml-6">
				<li>
					Students should understand the connection between the form (body) of an agent and its
					function (cognition)
				</li>
			</ol>
			<br />
			<p>
				In the previous version of this lab, students would solve a maze using different movement
				types (sliding vs jumping). However, this was difficult to connect to cognition
				specifically.
			</p>
			<br />
			<p>
				In the new version, students will simulate the behaviour of a paper read in class, where
				robots will "tidy" an arena of cubes by pushing them into piles.
			</p>
			<br />
			<p>
				This new version successfully improves upon teaching the learning goals, as it specifically
				connects to content covered in the lectures and readings for the course, and more accurately
				simulates embodied cognition.
			</p>
			<img
				class="max-w-10 m-10 rounded-lg"
				src="../assets/unity_ml/6 Embodied Cognition.gif"
				alt="unity ml"
			/>
			<h2 class="text-2xl divider">Reflections</h2>
			<p>
				Working on this project has been both engaging and educational, and I've thoroughly enjoyed
				the opportunity to continue the work on a project I started in my undergrad. I'm hoping that
				work on this project continues well into the future.
			</p>
		{/if}
	</div>
</div>

<style>
	.content {
		align-items: center;
	}
	p {
		max-width: 80%;
		min-width: 300px;
	}
	ol,
	ul {
		max-width: 80%;
		min-width: 300px;
	}
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
