<script>
	import { onMount } from 'svelte';

	import ProjectCard from '../components/ProjectCard.svelte';

	import { swipe } from 'svelte-gestures';
	let direction;
	let target;

	function handler(event) {
		direction = event.detail.direction;
		target = event.detail.target;
		console.log(event);
		if (direction === 'right') {
			selectedIndex--;
		} else if (direction === 'left') {
			selectedIndex++;
		} else if (direction === 'bottom') {
			window.scrollBy({
				top: -200,
				behavior: 'smooth'
			});
		} else {
			window.scrollBy({
				top: 200,
				behavior: 'smooth'
			});
		}

		rotateCarousel();
	}

	let selectedIndex = 0;
	let carousel, cells, cellWidth, cellHeight, radius, theta;
	let isHorizontal = false;
	let rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
	// let orientationRadios;
	let width = '400px';
	let cards = [];

	let WinWidth = 0;

	onMount(() => {
		console.log(window.innerWidth);
		WinWidth = window.innerWidth;
		let container = document.getElementById('portfolio');
		cards = container.getElementsByClassName('card');
		width = 'auto';
		overflow = 'visible';
		carousel = document.querySelector('.carousel-container');
		// console.log(carousel);
		cells = document.querySelectorAll('.carousel-cell');
		cellWidth = cards[0].offsetWidth;
		// console.log(cellWidth);
		cellHeight = carousel.offsetHeight;
		// orientationRadios = document.querySelectorAll('input[name="orientation"]');

		onOrientationChange();

		window.addEventListener('resize', resize);
	});
	let overflow = 'hidden';
	function rotateCarousel() {
		overflow = 'hidden';
		var angle = theta * selectedIndex * -1;
		carousel.style.transform = 'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)';
		// setTimeout(() => {
		// 	overflow = 'visible';
		// }, 1100);
	}

	function changeCarousel() {
		let cellCount = cells.length;
		theta = 360 / cellCount;
		var cellSize = cellWidth + 20;
		radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
		console.log('radius: ', radius);
		console.log('window: ', window.innerWidth);

		for (var i = 0; i < cells.length; i++) {
			var cell = cells[i];
			if (i < cellCount) {
				// visible cell
				cell.style.opacity = 1;
				var cellAngle = theta * i;
				cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
			} else {
				// hidden cell
				cell.style.opacity = 0;
				cell.style.transform = 'none';
			}
		}

		rotateCarousel();
	}

	function resize() {
		// if (window.innerWidth < 700) {
		// 	isHorizontal = false;
		// 	width = 'auto';
		// 	overflow = 'hidden';
		// } else {
		// 	isHorizontal = true;
		// }
		cellWidth = cards[0].offsetWidth;
		console.log('width', cellWidth);
		onOrientationChange();
	}

	// (function () {
	// 	for (var i = 0; i < orientationRadios.length; i++) {
	// 		var radio = orientationRadios[i];
	// 		radio.addEventListener('change', onOrientationChange);
	// 	}
	// })();

	function onOrientationChange() {
		// var checkedRadio = document.querySelector('input[name="orientation"]:checked');
		// isHorizontal = checkedRadio.value == 'horizontal';
		rotateFn = 'rotateY';
		changeCarousel();
	}

	// set initials
</script>

<div id="portfolio" class="section hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div>
			<h1 class="text-5xl font-bold mt-14 text-center">My Portfolio</h1>
			<!-- <button class="btn glow-on-hover black">See more projects ></button> -->
			<!-- <h2 class="font-bold text-3xl m-5">Featured Projects</h2> -->
			<!-- <button class="btn glow-on-hover black">See All Projects</button> -->
			<div
				class="scene"
				style="margin: 20px 0px; width: 80vh; max-width: 500px; overflow-y: visible; overflow-x: visible; max-width: 80vw"
			>
				<div class="carousel-buttons">
					<button
				on:click={() => {
					selectedIndex--;
					rotateCarousel();
				}}
				class="btn btn-circle glow-on-hover bright"
			>
				&#60;
			</button>
			<button
				on:click={() => {
					selectedIndex++;
					rotateCarousel();
				}}
				class="btn btn-circle glow-on-hover bright"
			>
				&#62;
			</button>
				</div>
				<div class="flex align-center justify-center carousel-container">
					<div
						class="carousel-cell"
					>
						<ProjectCard
							title="Cogs 300 Labs"
							url="assets/ML_Agents_scene.png"
							alt="chip"
							topBadge="C#"
							description="A set of programs designed for student use in the UBC course Cognitive Systems 300: Understanding and Designing Cognitive Systems"
							bottomBadges={['Unity', 'PyTorch', 'Canvas LMS']}
							link="unityml"
						/>
					</div>
					<!-- <div
						class="carousel-cell"
						use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
						on:swipe={handler}>
						<ProjectCard
							title="Experiments"
							url="assets/ML_Agents_scene.png"
							alt="chip"
							topBadge="featured"
							description="An open ended learning environment where university students train
							machine learning agents to compete in a capture the flag competition."
							bottomBadges={['Unity', 'Unity ML Agents']}
							link="unityml" />
					</div> -->
					<div
						class="carousel-cell"
					>
						<ProjectCard
							title="Evolving Cyborgs"
							url="assets/EvolvingCyborgs.jpg"
							alt="chip"
							topBadge="JavaScript"
							description="A gamified habit and behaviour tracker. Based off of psychological
							research, this app aims to make the process of behaviour change easier."
							bottomBadges={['Svelte', 'Supabase', 'PWA', 'Netlify', 'Tailwind CSS']}
							link="evolvingcyborgs"
						/>
					</div>

					<div
						class="carousel-cell"
										>
						<ProjectCard
							title="Tech Tracker"
							url="assets/TechTracker.jpg"
							alt="chip"
							topBadge="JavaScript"
							description="An inventory management app for employees to sign out, track, and return
							technology (laptops, arduinos, etc...) used in our program delivery."
							bottomBadges={['Svelte', 'Supabase', 'PWA', 'Netlify', 'Tailwind CSS']}
							link="techtracker"
						/>
					</div>
					<div
						class="carousel-cell"
						>
						<ProjectCard
							title="Teacher Pro-D Hub"
							url="assets/Pro-D_Hub.png"
							alt="chip"
							topBadge="JavaScript"
							description="A hub to provide STEM resources, lesson plans, online courses, and events
							for teachers"
							bottomBadges={['Webflow']}
							link="pro-dhub"
						/>
					</div>
					<div
						class="carousel-cell"
						>
						<ProjectCard
							title="Obsidian Cognitive Assistant"
							url="assets/Obsidian-Cognitive-Assistant.png"
							alt="chip"
							topBadge="TypeScript"
							description="A plugin for Obsidian.md which connects to OpenAI's API and uses saved templates to assist the user with writing and learning tasks in a way that draws from best practices in cognitive science research"
							bottomBadges={['Svelte', 'Obsidian.md', 'OpenAI']}
							link="obsidian-cognitive-assistant"
						/>
					</div>
					<!-- <div
						class="carousel-cell"
						
					>
						<ProjectCard
							title="Death Typer"
							url="assets/DeathTyper Screens.jpg"
							alt="chip"
							topBadge="JavaScript"
							description="An app designed to increase typing speed and accuracy by training using a 'sudden death' mode"
							bottomBadges={['Svelte', 'Supabase', 'Vercel', 'Tailwind CSS']}
							link="deathtyper"
						/>
					</div> -->
					<!-- <div
						class="carousel-cell"
						use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
						on:swipe={handler}
					>
						<ProjectCard
							title="Death Typer"
							url="lights.jpg"
							alt="chip"
							topBadge="featured"
							description="A sudden death typing game designed to increase typing spped and accuracy"
							bottomBadges={['Svelte']}
						/>
					</div> -->
					<!-- <div
						class="carousel-cell"
						use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
						on:swipe={handler}
					>
						<ProjectCard
							title="Machine Learning for Teachers"
							url="lights.jpg"
							alt="chip"
							topBadge="featured"
							description="An online course designed to provide elementary school teachers with the knowledge and lesson plans needed to bring ML into their classrooms."
							bottomBadges={['Edx', 'DaVinci Resolve']}
						/>
					</div> -->
				</div>
			</div>
			
		</div>
	</div>
</div>

<style>
	.scene::-webkit-scrollbar {
		display: none;
	}
	#portfolio {
		padding-bottom: 100px;
		max-width: 99vw;
		overflow-x: hidden;
	}
	.hero-content {
		max-width: 80%;
	}
	.carousel-buttons{
		position: relative;
		z-index: 5;
		top: 33%;
		display: flex;
		justify-content: space-between;
	}

	
</style>
