<script>
	import { onMount } from 'svelte';

	import ProjectCard from '../components/ProjectCard.svelte';

	import { swipe } from 'svelte-gestures';
	let direction;
	let target;

	function handler(event) {
		direction = event.detail.direction;
		target = event.detail.target;
		console.log(direction);
		if (isHorizontal) {
			if (direction === 'right') {
				selectedIndex--;
			} else {
				selectedIndex++;
			}
		} else {
			if (direction === 'top') {
				selectedIndex--;
			} else {
				selectedIndex++;
			}
		}

		rotateCarousel();
	}

	let selectedIndex = 0;
	let carousel, cells, cellWidth, cellHeight, radius, theta;
	let isHorizontal = false;
	let rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
	// let orientationRadios;
	let width = '400px';

	onMount(() => {
		console.log(window.innerWidth);
		if (window.innerWidth < 700) {
			console.log('run!');
			isHorizontal = false;
			width = 'auto';
			overflow = 'hidden';
		} else {
			isHorizontal = true;
		}
		carousel = document.querySelector('.carousel-container');
		console.log(carousel);
		cells = document.querySelectorAll('.carousel-cell');
		cellWidth = carousel.offsetWidth;
		cellHeight = carousel.offsetHeight;
		// orientationRadios = document.querySelectorAll('input[name="orientation"]');

		onOrientationChange();

		window.addEventListener('resize', resize);
		setTimeout(() => {
			overflow = 'visible';
		}, 1100);
	});
	let overflow = 'visible';
	function rotateCarousel() {
		var angle = theta * selectedIndex * -1;
		carousel.style.transform = 'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)';
		setTimeout(() => {
			overflow = 'visible';
		}, 1100);
	}

	function changeCarousel() {
		let cellCount = 4;
		theta = 360 / cellCount;
		var cellSize = isHorizontal ? cellWidth : cellHeight;
		radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
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
		if (window.innerWidth < 700) {
			isHorizontal = false;
			width = 'auto';
			overflow = 'hidden';
		} else {
			isHorizontal = true;
		}
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
		rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
		changeCarousel();
	}

	// set initials
</script>

<div id="portfolio" class="section hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div>
			<h1 class="text-5xl font-bold mt-14 pr-5">My Portfolio</h1>
			<!-- <button class="btn glow-on-hover black">See more projects ></button> -->
			<!-- <h2 class="font-bold text-3xl m-5">Featured Projects</h2> -->
			<!-- <button class="btn glow-on-hover black">See All Projects</button> -->
			<div
				class="scene"
				style="margin: {!isHorizontal * 150 + 20}px auto; width: {width}; overflow-y: {overflow}"
			>
				<div class="flex justify-center carousel-container">
					<div
						class="carousel-cell"
						use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
						on:swipe={handler}
					>
						<ProjectCard
							title="Evolving Cyborgs"
							url="assets/EvolvingCyborgs.jpg"
							alt="chip"
							topBadge="featured"
							description="A gamified habit and behaviour tracker. Based off of psychological research, this app aims to make the process of behaviour change easier."
							bottomBadges={['Svelte', 'Supabase', 'PWA', 'Netlify', 'Tailwind CSS']}
							link="evolvingcyborgs"
						/>
					</div>
					<div
						class="carousel-cell"
						use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
						on:swipe={handler}
					>
						<ProjectCard
							title="Unity ML Tournament"
							url="assets/ML_Agents_scene.png"
							alt="chip"
							topBadge="featured"
							description="An open ended learning environment where university students train machine learning agents to compete in a capture the flag competition."
							bottomBadges={['Unity', 'Unity ML Agents']}
							link="unityml"
						/>
					</div>
					<div
						class="carousel-cell"
						use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
						on:swipe={handler}
					>
						<ProjectCard
							title="Tech Tracker"
							url="assets/TechTracker.jpg"
							alt="chip"
							topBadge="featured"
							description="An inventory management app for employees to sign out, track, and return technology (laptops, arduinos, etc...) used in our program delivery."
							bottomBadges={['Svelte', 'Supabase', 'PWA', 'Netlify', 'Tailwind CSS']}
							link="techtracker"
						/>
					</div>
					<div
						class="carousel-cell"
						use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
						on:swipe={handler}
					>
						<ProjectCard
							title="Teacher Pro-D Hub"
							url="assets/Pro-DHub.jpg"
							alt="chip"
							topBadge="featured"
							description="A hub to provide STEM resources, lesson plans, online courses, and events for teachers"
							bottomBadges={['Webflow']}
							link="pro-dhub"
						/>
					</div>
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
			<button
				on:click={() => {
					selectedIndex--;
					rotateCarousel();
				}}
				class="btn btn-circle">&#60;</button
			>
			<button
				on:click={() => {
					selectedIndex++;
					rotateCarousel();
				}}
				class="btn btn-circle">&#62;</button
			>
		</div>
	</div>
</div>

<style>
	#portfolio {
		padding-bottom: 100px;
		max-width: 100vw;
	}	
</style>
