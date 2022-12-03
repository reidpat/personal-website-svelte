<script>
	import { onMount } from 'svelte';
	import MenuScroller from '../components/menuScroller.svelte';

	let currentScroll = 'home';
	function scrollTo(id) {
		var element = document.getElementById(id);
		// removing this comment breaks the code???????
		element.scrollIntoView({ behavior: 'smooth' });
	}

	function scrollAbout(){
		scrollTo('about');
	}

	onMount(() => {
		window.addEventListener('scroll', scrollBot);
		window.addEventListener('resize', changeMenu);
		changeMenu();
	});

	let small = false;
	function changeMenu(){
		console.log('width: ', window.windowWidth)
		small = window.windowWidth < 425; 
	}

	let opacity = 0;
	function scrollBot() {
		opacity = scrollY / 250 - 1;

		let sections = document.getElementsByClassName('section');

		Array.from(sections).forEach((section) => {
			const sectionTop = section.offsetTop;
			if (scrollY >= sectionTop - 350) {
				currentScroll = section.getAttribute('id');
			}
		});
	}
</script>

<style>
	#bottom-nav-wrapper {
		position: fixed;
		bottom: 0px;
		left: 0px;
		display: flex;
		justify-content: center;
		width: 100%;
		/* height: 65px; */
		border-radius: 0px;
	}
	.glow:before {
		opacity: 0.5 !important;
	}

	.tab {
		width: auto;
		margin: auto 5px;
		background-color: black;
	}
	.tab:after {
		background: black;
	}
	.tab:before {
		opacity: 0;
	}
	img {
		height: 30px;
	}
	.menu li {
		margin-bottom: 5px
	}
</style>

<div id="bottom-nav-wrapper" class="tabs tabs-boxed bg-base-100 z-20" style="opacity: {opacity};">
	<div
		on:click={() => {
			scrollTo('home');
		}}
		class:glow={currentScroll === 'home'}
		class="tab glow-on-hover tab-lg">
		<img src="/home.png" alt="home button" />
	</div>
	<div class="hidden xs:block">
		<MenuScroller name="About" classes="tab glow-on-hover tab-lg" bind:currentScroll/>
		<MenuScroller name="Portfolio" classes="tab glow-on-hover tab-lg" bind:currentScroll/>
		<MenuScroller name="Media" classes="tab glow-on-hover tab-lg" bind:currentScroll/>
	</div>
	<div class="dropdown dropdown-top dropdown-end xs:hidden">
		<label tabindex="0" class="class:glow m-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h7" />
			</svg>
		</label>
		<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
			<li>
				<MenuScroller name="About" classes="tab glow-on-hover tab-lg flex align-center" bind:currentScroll/>
			</li>
			<li>
				<MenuScroller name="Portfolio" classes="tab glow-on-hover tab-lg" bind:currentScroll/>
			</li>

			<li>
				<MenuScroller name="Media" classes="tab glow-on-hover tab-lg" bind:currentScroll/>
			</li>
		</ul>
	</div>
</div>
