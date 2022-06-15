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
		opacity = scrollY/150 - 0.5;
        console.log(opacity);
		
		let sections = document.getElementsByClassName('section');

		Array.from(sections).forEach((section) => {
			const sectionTop = section.offsetTop;
			if (scrollY >= sectionTop - 200) {
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
		class:tab-active={currentScroll === 'home'}
		class:bg-primary={currentScroll === 'home'}
		class="tab tab-lg"
	>
		Home
	</div>
	<div
		on:click={() => {
			scrollTo('about');
		}}
		class:tab-active={currentScroll === 'about'}
		class="tab tab-lg"
	>
		About
	</div>
	<div
		on:click={() => {
			scrollTo('portfolio');
		}}
		class:tab-active={currentScroll === 'portfolio'}
		class="tab tab-lg"
	>
		Portfolio
	</div>
</div>

<style>
	#bottom-nav-wrapper {
		position: sticky;
		top: calc(100vh - 54px);
		display: flex;
		justify-content: center;
		width: 100%;
		height: 55px;
		border-radius: 0px;
	}
</style>
