<script>
	import NavbarOther from '../../sections/NavbarOther.svelte';
	import Construction from '../../components/Construction.svelte';
</script>

<svelte:head>
	<title>Pro-D Hub</title>
	<link rel="icon" href="../assets/code_icon.png" />
</svelte:head>
<NavbarOther />
<div class="background bg-base-200 p-10 min-h-screen">
	<div
		class="content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"
	>
		<h1 class="text-3xl bold text-center mb-3">Teacher Pro-D Hub</h1>
		<p class="text-lg text-center">A resource hub and event portal for K-12 teachers</p>
		<img
			class="max-w-10 m-10 rounded-lg"
			src="..\assets\Pro-D_Hub.png"
			alt="interface for pro-d hub"
		/>
		<a class="m-auto" href="https://pro-d.geeringup.ca/" target="_blank"
			><button class="glow-on-hover pl-3 pr-3">See Website</button></a
		>
		<h2 class="text-2xl bold divider">My Role</h2>
		<p class="text-center">
			Solo designer and developer creating this resource for the professional development team at
			Geering Up
		</p>

		<h2 class="text-2xl bold divider">The Problem</h2>
		<p>
			When I joined the Pro-D team at Geering Up the current resource hub was being hosted on Edx,
			which required both an Edx account and an invite in order to be accessed. This created a lot
			of unnecessary friction for teachers who may have wanted to use our resources.
		</p>

		<h2 class="text-2xl bold divider">The Solution</h2>
		<p>
			Seeing this problem, I pitched the idea of me creating an alternative resource hub which would
			be easier for teachers to access and use. We decided to use <a
				class="link link-secondary"
				href="https://webflow.com/">Webflow</a
			> as our technology as it allowed me enough control to create what we needed but was still easy
			for non-technical users to maintain and add content to.
		</p>

		<h3 class="text-lg bold">Design Process</h3>
		<p class="mb-5">
			The design process for this website revolved around the resource page, which contains our
			created scripts for activities that teachers can run in their classroom. This design includes
			3 key features:
		</p>
		<ol class="ml-5">
			<li>
				Cards
				<ul class="pl-2">
					<li>
						The main content of the page is the cards. Each activity is represented as a card,
						allowing for clear distinctions between activities and easy parsing of the information
						about said activity.
					</li>
				</ul>
			</li>
			<li>Filters</li>
			<ul class="pl-2">
				<li>
					As Geering Up has a wide variety of teachers who access the content, teachers need an easy
					way to filter content by grade and topic in order to find activities which are relevant to
					them. To solve this issue, I added a persistent menu which allows you to filter content.
				</li>
			</ul>
			<li>Designers</li>
			<ul class="pl-2">
				<li>
					People like content better when it feels like it was made by another human. To help with
					this, I added in a small badge to the corner of each card showing a small picture of the
					person who designed the activity.
				</li>
			</ul>
		</ol>
		<img
			class="max-w-5 m-10 rounded-lg"
			src="..\assets\Pro-D_Hub.png"
			alt="interface for pro-d hub"
		/>

		<h3 class="text-lg bold">Final Product</h3>
		<p class="mb-5">
			This product allowed our team to begin investing more seriously in our online content platform
			as this new website was significantly easier to access and use for both teachers and the
			internal team.
		</p>
		<p class="mb-5 text-center">This project is freely available to access online.</p>
		<a class="m-auto" href="https://pro-d.geeringup.ca/" target="_blank"
			><button class="glow-on-hover pl-3 pr-3 justify-start">See Website</button></a
		>
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
	ol {
		list-style: decimal;
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
