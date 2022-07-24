<script>
	import NavbarOther from '../../sections/NavbarOther.svelte';
	import Construction from '../../components/Construction.svelte';

	let currentSelect = 3;
	let problemSelect = 1;
</script>

<svelte:head>
	<title>Evolving Cyborgs</title>
</svelte:head>
<NavbarOther />
<div class="background bg-base-200 p-10 min-h-screen">
	<div
		class="content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"
	>
		<h1 class="text-3xl bold text-center mb-3">Evolving Cyborgs</h1>
		<p class="text-lg text-center">A better gamified habit tracker</p>
		<img class="max-w-10 m-10 rounded-lg" src="../assets/EvolvingCyborgs.jpg" alt="" />
		<a class="m-auto" href="https://github.com/reidpat/evolving-cyborgs-svelte" target="_blank"
			><button class="glow-on-hover pl-3 pr-3">See Code</button></a
		>
		<h2 class="text-2xl bold divider">My Role</h2>
		<p class="text-center">Owner, designer and sole creator of a personal project</p>
		<h2 class="text-2xl bold divider">The Problem</h2>
		<p class="mb-5">
			I've always enjoyed playing video games but the older I get, the more frustrating it feels to
			only be able to affect the digital world. I wanted to find a way that I could still feel like
			I'm playing a game, but do it in the physical world. In my searching for a solution to this
			problem, I began to learn about gamified habit trackers.
		</p>
		<h3 class="text-lg bold">What is a gamified habit tracker?</h3>
		<p class="mb-5">
			Gamified habit trackers are a genre of app in which elements from video games (such as
			experience, levels, acheievements and character stats) are used to provide additional
			motivation to the user to help them complete real world tasks.
		</p>
		<h3 class="text-lg bold">Why existing apps didn't work</h3>
		<p class="mb-10">
			I couldn't find any apps out there which worked for me. I kept running into one of the
			following problems:
		</p>
		<div class="tabs tabs-boxed flex justify-center bg-base-300 mb-5">
			<button
				on:click={() => {
					problemSelect = 1;
				}}
				class:tab-active={problemSelect === 1}
				class="tab tab-lg tab-bordered">1. Feedback</button
			>
			<button
				on:click={() => {
					problemSelect = 2;
				}}
				class:tab-active={problemSelect === 2}
				class="tab tab-lg tab-bordered">2. Platform</button
			>
			<button
				on:click={() => {
					problemSelect = 3;
				}}
				class:tab-active={problemSelect === 3}
				class="tab tab-lg tab-bordered">3. Customization</button
			>
		</div>
		{#if problemSelect == 1}
			<p>
				Giving rewards and punishments is one of the most effective known ways of creating behaviour
				change as it causes positive and negative associations with a specific behaviour. But if you
				are not careful with your timing of feedback, you can easily cause counterproductive
				situations. I found many apps were not careful with this feedback.
			</p>
			<p>
				For example, they would punish the user (usually by losing health, gold, or experience) when
				something like a habit was not completed. The issue here is that this punishment was applied
				the <i>next</i> time a user would log in. This made it easy to avoid the punishment simply by
				avoiding using the app.
			</p>
		{:else if problemSelect == 2}
			<p>
				Mobile applications are great because they are easily accessible, making data recording
				simple and easy to do. However, they are not great for extended text input and trying to
				view graphs and data is extremely difficult due to the small screen. I need an application
				that I am able to use on both mobile and desktop.
			</p>
		{:else}
			<p>
				I like tracking lots of things about my life, but I don't like it when all this data is
				stuck in silos. Allowing custom data types for tracking, or at least having an API available
				to export the data somewhere else is a must for me.
			</p>
		{/if}

		<h2 class="text-2xl bold divider">The Solution</h2>
		<p class="mb-5">
			I decided that the only way of solving these problems is if I made an application myself. This
			project is what originally encouraged me to learn web development
		</p>
		<div class="tabs tabs-boxed flex justify-center bg-base-300 mb-5">
			<button
				on:click={() => {
					currentSelect = 1;
				}}
				class:tab-active={currentSelect === 1}
				class="tab tab-lg tab-bordered">Version 1</button
			>
			<button
				on:click={() => {
					currentSelect = 2;
				}}
				class:tab-active={currentSelect === 2}
				class="tab tab-lg tab-bordered">Version 2</button
			>
			<button
				on:click={() => {
					currentSelect = 3;
				}}
				class:tab-active={currentSelect === 3}
				class="tab tab-lg tab-bordered">Version 3</button
			>
		</div>

		{#if currentSelect == 1}
			<div class="text-center">
				<p>Timeline: Feb - May, 2020</p>
				<h4>Technology Used</h4>
				<ul class="max-w-sm">
					<li>Vue (frontend)</li>
					<li>Firebase (backend)</li>
				</ul>
				<h4>Design Process</h4>
				<div class="h-96 carousel carousel-vertical rounded-box">
					<div class="carousel-item h-full">
						<img
							class="drawing-slides"
							src="../assets/evolving_cyborgs/drawing1.png"
							alt="first drawing"
						/>
					</div>
					<div class="carousel-item h-full">
						<img
							class="drawing-slides"
							src="../assets/evolving_cyborgs/drawing2.jpg"
							alt="second drawing"
						/>
					</div>
					<div class="carousel-item h-full">
						<img
							class="drawing-slides"
							src="../assets/evolving_cyborgs/drawing3.jpg"
							alt="third drawing"
						/>
					</div>
					<div class="carousel-item h-full">
						<img
							class="drawing-slides"
							src="../assets/evolving_cyborgs/drawing4.jpg"
							alt="fourth drawing"
						/>
					</div>
					<div class="carousel-item h-full">
						<img
							class="drawing-slides"
							src="../assets/evolving_cyborgs/drawing5.jpg"
							alt="first drawing"
						/>
					</div>
					<div class="carousel-item h-full">
						<img
							class="drawing-slides"
							src="../assets/evolving_cyborgs/drawing6.jpg"
							alt="first drawing"
						/>
					</div>
				</div>

				<h3>Feature Video</h3>
				<iframe
					src="https://www.youtube.com/embed/jHzjWNivhKY?start=26"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
				<div class="flex flex-col justify-center">
					<h3>Final Product</h3>
					<img id="final_app" src="../assets/evolving_cyborgs/updatedApp.png" alt="first drawing" />
				</div>
				<div id="reflection1" class="text-left">
					<h3 class="divider text-2xl">V1 Reflection</h3>
					<p>
						This was my first time embarking on a serious web app project using a frontend
						framework. Here's some of the lessons I learned along the way:
					</p>
					<h4 class="text-center">1. How to use data reactivity the wrong way</h4>
					<p>
						I was modifying my data using google cloud functions instead of modifying the state on
						the front end directly (which I later realised was the entire point of a front-end
						framework like Vue). This introduced a noticeable amount of lag when you interacted with
						the interface.
					</p>
					<h4 class="text-center">2. Use tabs to navigate instead of scrolling</h4>
					<p>
						It felt strange to have all the components on the same page. Using tabs would feel much
						more natural and be easier to navigate.
					</p>
					<h4 class="text-center">3. No need to remake the wheel (of todo lists)</h4>
					<p>
						There's already a bunch of great software designed around todo lists. My implementation
						of one didn't end up being that useful as I would end up managing my tasks in a separate
						program only to have to copy them in. In the future, I would just connect to an external
						piece of software using their API.
					</p>
					<h3 class="divider">Final Thoughts</h3>
					<p>
						Overall the concept I was going for was solid, but there was lots of room for
						improvement in the execution.
					</p>
					<p>
						Of my original 3 problems I set out to fix I was able to solve the first one - Punishing
						the User. My version of the app didn't actively punish you for missing a day, though it
						would reset your streaks and reduce your xp gain. I found this to be a good comprimise
						and it eliminated a major pain point I had with other applications
					</p>
				</div>
			</div>
		{:else if currentSelect == 2}
			<div class="text-center">
				<p>Timeline: Jan - Dec 2021</p>
				<h4>Technology Used</h4>
				<ul class="max-w-sm">
					<li>Vue (frontend)</li>
					<li>Firebase (backend)</li>
				</ul>
				<h3>Redesign #1</h3>
				<p class="text-left">
					I decided to revisit the project almost a year later with the intention of improving on
					it. I still didn't feel like I had created the piece of software that I was looking for.
					Primary among these concerns was one piece of feedback I kept recieving from friends who
					tried the app - it wasn't very good on mobile.
				</p>
				<h3>Design Process</h3>
				<p>So this time, I decided to design for mobile first</p>
				<img
					class="m-auto p-5"
					src="../assets/evolving_cyborgs/evolving_cyborgs_concept.jpg"
					alt=""
				/>
				<p class="text-left">
					Opting for a card based design and changing tabs through a menu at the bottom allows for a
					very smooth mobile experience. Adding PWA support was a priority so that it could behave
					like a native mobile app. <br />
					I also decided to focus on the habits section of the app, as this is what was being used the
					most.
				</p>
				<p class="text" />
				<h3>Final Product</h3>
				<img class="m-auto" src="../assets/evolving_cyborgs/evolving-cyborgs-mobile.png" alt="" />
				<h4>Features include:</h4>
				<ul class="max-w-xl">
					<li>A daily habit tracker</li>
					<li>Vices - time since last performed an action you are trying to stop</li>
					<li>Attributes - Game-like stats that increase based on completion of specific habits</li>
					<li>Friends list showing their level and current experience</li>
					<li>Daily checklist (works well for things like taking vitamins)</li>
				</ul>
				<div class="text-left">
					<h3 class="divider text-2xl text">V2 Reflection</h3>
					<p>
						This version of the app improved significantly upon the original and became my main
						habit tracker for the next year. The improvements in mobile usability were particularly
						notable.
					</p>
					<p class="mt-5">
						Through the process of creating this app, I began to run into major issues with using
						Firebase as a backend. Firebase structures it's data into collections and sub
						collections - kind of like folders and sub folders. This presented an issue for me
						because I would often want to connect parts of the app together in ways which did not
						easily fit into Firebase's structure. An example of this was the stats feature, which
						needed to be updated everytime a user completed a habit. Because these were in two
						separate "folders", I would either have to request data from both folders, or have
						copies of the data in two places. Due to Firebase's pricing schema the first option
						would have likely started costing me money, which I was not interested in spending as
						this app doesn't generate revenue. The second option is dangerous because once you have
						multiple copies of the same data it becomes hard to keep them in sync with one another.
						<br />
						Ultimately, this caused me to scrap this version of the project and start using a new backend,
						which requires a MAJOR redesign.
					</p>
				</div>
			</div>
		{:else}
			<div class="text-center">
				<p>Timeline: Jan 2022 - Present</p>
				<h4>Technology Used</h4>
				<ul class="max-w-sm">
					<li>Svelte (frontend)</li>
					<li>Supabase (backend)</li>
				</ul>

				<h4>Design Process</h4>
				<div class="text-left mt-5">
					<p>
						After my issues with structuring data on Firebase, I decided to rebuild the app using
						Supabase instead. This required a total overhaul of how data was processed and stored.
						Around this same time, I found myself experimenting with Svelte - an frontend
						alternative to Vue. I quickly fell in love with Svelte and I decided to use it to create
						the app instead of Vue.
					</p>
					<p>
						These two factors combined resulted in the need to do a complete rewrite of the existing
						code. The existing UI/UX for the app stayed nearly identical, as there were no issues
						with this area and Svelte code looks and performs quite similarly to Vue, meaning there
						were large sections of my code that I was able to reuse after making minor edits. This
						resulted in a design process that mostly involved thinking about how to structure the
						data in a way that wouldn't cause me problems in the future when I wanted to add more
						features.
					</p>
				</div>
                <h4>Final Product</h4>
                <img class="max-w-6 m-auto rounded-lg" src="../assets/EvolvingCyborgs.jpg" alt="" />
                <p class="mt-5">I've been very with the progress I've made on this project. It's now almost at the point where I left off with Version 2, but I don't feel nearly as limited with my data structure.</p>
                <h4>Features</h4>
                <ul class="max-w-xl">
					<li>Habit Tracker - Now with dynamically adjusting goals!</li>
					<li>Vices - time since last performed an action you are trying to stop</li>
					<li>Friends list showing their level and current experience</li>
				</ul>
                <div class="text-left">
					<h3 class="divider text-2xl text">V3 Roadmap</h3>
                    <p>Version 3 of this project is under active development and so far there have been no major issues that require reflection. I am planning on continuing development and adding the following features:</p>
                    <ul class="max-w-xl text-left justify-self-start">
                        <li>Achievements and Badges - Show off to your friends what you have accomplished!</li>
                        <li>Activities - Track specific behaviour occurances which may not happen every day, or happen multiple times a day</li>
                        <li>Custom Data tracking - Building off the activites above, modify it to us custom data types allowing tracking of any information desired</li>
                        <li>Attributes - Game-like stats which are leveled as you complete various actions</li>
                    </ul>
                </div>
			</div>
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
</style>
