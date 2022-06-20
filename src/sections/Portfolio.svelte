<script>
	import ProjectCard from "../components/ProjectCard.svelte";
</script>
<div id="portfolio" class="section hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div>
			<h1 class="text-5xl font-bold">My Portfolio</h1>
			<p class="py-6">
				A small selection of projects I have worked on.
			</p>
			<button class="btn glow-on-hover black">See more projects ></button>
			<h2 class="font-bold text-3xl m-5">Featured Projects</h2>
			<!-- <button class="btn glow-on-hover black">See All Projects</button> -->
			<div class="flex justify-center flex-wrap">
				<ProjectCard title="Evolving Cyborgs" url="chip.jpg" alt="chip" topBadge="featured" description="A gamified habit and behaviour tracker. Based off of psychological studies, this app aims to make the process of behaviour change easier." bottomBadges={["Svelte", "Supabase", "PWA", "Netlify", "Tailwind CSS"]}/>
				<ProjectCard title="Unity ML Tournament" url="chip2.jpg" alt="chip" topBadge="featured" description="An open ended learning environment where university students train machine learning agents to compete in a capture the flag competition." bottomBadges={["Unity", "Unity ML Agents"]}/>
				<ProjectCard title="Tech Tracker" url="lights.jpg" alt="chip" topBadge="featured" description="An inventory management app which allows Geering Up employees to sign out, track, and return the technology (laptops, arduinos, etc...) used in our program delivery." bottomBadges={["Svelte", "Supabase", "PWA", "Netlify", "Tailwind CSS"]}/>
				<ProjectCard title="Teacher Pro-D Hub" url="lights.jpg" alt="chip" topBadge="featured" description="A hub to provide STEM resources, lesson plans, online courses, and events for teachers" bottomBadges={["Webflow"]}/>
			</div>
		</div>
	</div>
</div>

<style>
	#portfolio{
		padding-bottom: 100px;
	}
</style>
