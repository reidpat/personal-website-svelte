<script>
	import NavbarOther from '../../sections/NavbarOther.svelte';
	import Construction from '../../components/Construction.svelte';

	let currentSelect = 'v3';
	let problemSelect = 1;
</script>

<NavbarOther />
<div class="background bg-base-200 p-10 min-h-screen">
	<div
		class="content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-center text-lg, max-w-4xl"
	>
		<h1 class="text-3xl bold text-center mb-3">Evolving Cyborgs</h1>
		<p class="text-lg">A better gamified habit tracker</p>
		<img class="max-w-10 m-10 rounded-lg" src="../assets/EvolvingCyborgs.jpg" alt="" />
		<a class="m-auto" href="https://github.com/reidpat/evolving-cyborgs-svelte" target="_blank"
			><button class="glow-on-hover pl-3 pr-3">See Code</button></a
		>
		<div class="divider" />
		<h2 class="text-2xl bold text-center">My Role</h2>
		<p>Owner, designer and sole creator of a personal project</p>
		<div class="divider" />
		<h2 class="text-2xl bold text-center">The Problem</h2>
		<p class="mb-5">
			I've always enjoyed playing video games but the older I get, the more frustrating it feels to
			only be able to affect the digital world. I wanted to find a way that I could still feel like
			I'm playing a game, but do it in the physical world. In my searching for a solution to this
			problem, I began to learn about gamified habit trackers.
		</p>
		<h3 class="text-lg bold text-center">What is a gamified habit tracker?</h3>
		<p class="mb-5">
			Gamified habit trackers are a genre of app in which elements from video games (such as
			experience, levels, acheievements and character stats) are used to provide additional
			motivation to the user to help them complete real world tasks.
		</p>
		<h3 class="text-lg bold text-center">Why existing apps didn't work</h3>
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
				change as it causes positive and negative associations with a specific
				behaviour. But if you are not careful with your timing of feedback, you can easily cause
				counterproductive situations. I found many apps were not careful with this feedback.
			</p>
			<p>
				For example, they would punish the user (usually by losing health, gold, or
				experience) when something like a habit was not completed. The issue here is that this
				punishment was applied the <i>next</i> time a user would log in. This made it easy to avoid the
				punishment simply by avoiding using the app.
			</p>
		{:else if problemSelect == 2}
			<p>Mobile applications are great because they are easily accessible, making data recording simple and easy to do. However, they are not great for extended text input and trying to view graphs and data is extremely difficult due to the small screen. I need an application that I am able to use on both mobile and desktop.</p>
		{:else}
			<p> I like tracking lots of things about my life, but I don't like it when
                all this data is stuck in silos. Allowing custom data types for
                tracking, or at least having an API available to export the data
                somewhere else is a must for me.</p>
		{/if}

		<div class="divider" />
		<h2 class="text-2xl bold text-center">The Solution</h2>
        <p class="mb-5"> I decided that the only way of solving these
            problems is if I made an application myself. This project is what
            originally encouraged me to learn web development</p>
		<div class="tabs tabs-boxed flex justify-center bg-base-300">
			<button
				on:click={() => {
					currentSelect = 'v1';
				}}
				class:tab-active={currentSelect === 'v1'}
				class="tab tab-lg tab-bordered">Version 1</button
			>
			<button
				on:click={() => {
					currentSelect = 'v2';
				}}
				class:tab-active={currentSelect === 'v2'}
				class="tab tab-lg tab-bordered">Version 2</button
			>
			<button
				on:click={() => {
					currentSelect = 'v3';
				}}
				class:tab-active={currentSelect === 'v3'}
				class="tab tab-lg tab-bordered">Version 3</button
			>
		</div>
        {#if currentSelect == 'v1'}
            <p>Timeline: Feb - May, 2020</p>
        {:else if currentSelect == 'v2'}
            <p>Timeline: June 2020 - Dec 2021</p>
        {:else}
            <p>Timeline: Jan 2022 - Present</p>
        {/if}
	</div>
	<Construction />
</div>

<style>
	img {
		max-height: 400px;
		object-fit: contain;
	}
	.divider {
		padding: 20px;
		padding-top: 30px;
	}
	h1,
	h2,
	h3,
	h4 {
		margin: 20px 20px;
		font-weight: 700;
	}
</style>
