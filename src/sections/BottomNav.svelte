<script>
	import { onMount } from 'svelte';

	let currentScroll = 'home';
	function scrollTo(id) {
		var element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
	}

	onMount(() => {
		window.addEventListener("scroll", scrollBot)
	});

	let opacity = 0;
	function scrollBot() {
		opacity = scrollY/250 - 1;
		
		let sections = document.getElementsByClassName('section');

		Array.from(sections).forEach((section) => {
			const sectionTop = section.offsetTop;
			if (scrollY >= sectionTop - 350) {
				currentScroll = section.getAttribute('id');
			}
		});
	}
</script>

<div id="bottom-nav-wrapper" class="tabs tabs-boxed bg-base-100 sticky z-20" style="opacity: {opacity};">
	<div
		on:click={() => {
			scrollTo('home');
		}}
		class:glow={currentScroll === 'home'}
		class="tab glow-on-hover tab-lg"
	>
		Home
	</div>
	<div
		on:click={() => {
			scrollTo('about');
		}}
		class:glow={currentScroll === 'about'}
		class="tab glow-on-hover tab-lg"
	>
		About
	</div>
	<div
		on:click={() => {
			scrollTo('portfolio');
		}}
		class:glow={currentScroll === 'portfolio'}
		class="tab glow-on-hover tab-lg"
	>
		Portfolio
	</div>
	<div
		on:click={() => {
			scrollTo('media');
		}}
		class:glow={currentScroll === 'media'}
		class="tab glow-on-hover tab-lg"
	>
		Media
	</div>
</div>

<style>
	#bottom-nav-wrapper {
		position: sticky;
		top: calc(100vh - 64px);
		display: flex;
		justify-content: center;
		width: 100%;
		height: 65px;
		border-radius: 0px;
	}
	.glow:before{
		opacity: 0.5 !important;
	}
	
	.tab{
		width: auto;
		margin: auto 5px;
		background-color: black;
	}
	.tab:after{
		background: black;
	}
	.tab:before{
		opacity: 0;
	}
</style>
