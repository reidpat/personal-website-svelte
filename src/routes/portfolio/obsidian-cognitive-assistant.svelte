<script>
	import NavbarOther from '../../sections/NavbarOther.svelte';
	import Construction from '../../components/Construction.svelte';
</script>

<svelte:head>
	<title>Obsidian Cognitive Assistant</title>
	<!-- <link rel="icon" href="../assets/Obsidian-Cognitive-Assistant.png" /> -->
</svelte:head>
<NavbarOther />
<div class="background bg-base-200 p-10 min-h-screen">
	<div
		class="portfolio-item content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center  align-center text-left text-lg, max-w-4xl"
	>
		<h1 class="text-3xl bold text-center mb-3">Obsidian Cognitive Assistant</h1>
		<p class="">
			A plugin for Obsidian.md designed to enhance users' writing and learning experiences. Drawing
			on best practices and research in the cognitive sciences, this assistant serves as an
			effective extended cognition system, or an "exo-cortex" for users, creating an optimized
			digital learning environment.
		</p>
		<img
			class="max-w-10 m-10 rounded-lg"
			src="../assets/Obsidian-Cognitive-Assistant.png"
			alt="A screenshot showing the layout and result of a conversation"
		/>
        <a
			class="m-auto btn btn-circle glow-on-hover bright uppercase mt-5"
			style="width: 250px;"
			href="https://github.com/reidpat/Obsidian_Cognitive_Assistant"
			target="_blank">
			See GitHub
		</a>
		<h2 class="h2 bold divider text-xl">Key Features</h2>
		<ul class="portfolio-list">
			<li>
				Interactive interface: Through conversational interaction with ChatGPT, users can seamlessly
				engage in writing and learning tasks.
			</li>
			<li>
				Customizable templates: With savable and selectable templates, it's effortless to prompt the
				assistant according to the user's specific needs.
			</li>
			<li>
				Secure and accessible data storage: All interactions and instructions are saved and stored
				in markdown files (.md) on the user's local computer, ensuring full control and easy access
				to data.
			</li>
		</ul>
        <h2 class="h2 divider bold text-xl">Description</h2>
		<p class="">
			The Obsidian Cognitive Assistant is an open-source project built on GitHub, primarily using
			Typescript and Svelte. The plugin operates within Obsidian.md and interacts with OpenAI's API
			to facilitate intelligent user interactions.
		</p>
        <br>
		<p class="">
			Although still in its proof-of-concept and testing phase, the Obsidian Cognitive Assistant has
			shown considerable promise. Early observations have highlighted significant improvements in
			the usability of ChatGPT, particularly with the saveable system prompts and the integration of
			users' existing note-taking systems.
		</p>
        <h2 class="h2 divider bold text-xl">Next Steps</h2>
		<p class="">
			As the solo developer and researcher for this project, I have been diligently fine-tuning the
			Obsidian Cognitive Assistant's capabilities. With its open-source nature, I eagerly look
			forward to recruiting more testers and developers to contribute to its continuous growth and
			refinement. The goal remains to provide a tool that empowers users to learn more efficiently
			and intuitively, ultimately extending their cognitive capabilities in a digital world.
		</p>
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
    .portfolio-item{
        justify-content: center;
        align-items: center;
    }
    p {
        max-width: 80%;
        min-width: 300px;
    }
	ol {
		list-style: decimal;
	}
	.portfolio-description {
		font-size: 1em;
		color: #666;
	}

	.portfolio-list {
		padding-left: 20px;
        max-width: 80%;
        min-width: 300px;
	}

	.portfolio-list li {
		margin-bottom: 10px;
	}
	.portfolio-subtitle {
		font-size: 1.5em;
		color: #333;
		margin-top: 20px;
		margin-bottom: 10px;
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
