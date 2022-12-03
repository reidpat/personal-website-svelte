<script>
	import { onMount } from 'svelte';

	let currentScroll = 'home';
	function scrollTo(id) {
		var element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
	}

	onMount(() => {
		window.addEventListener('scroll', scrollBot);
		window.addEventListener('resize', resize);
		resize();
	});

	let winWidth = 0;
	function resize() {
		winWidth = window.width;
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
		height: 65px;
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
	<div class="hidden sm:block">
		<div
			on:click={() => {
				scrollTo('about');
			}}
			class:glow={currentScroll === 'about'}
			class="tab glow-on-hover tab-lg">
			About
		</div>
		<div
			on:click={() => {
				scrollTo('portfolio');
			}}
			class:glow={currentScroll === 'portfolio'}
			class="tab glow-on-hover tab-lg">
			Portfolio
		</div>
		<div
			on:click={() => {
				scrollTo('media');
			}}
			class:glow={currentScroll === 'media'}
			class="tab glow-on-hover tab-lg">
			Media
		</div>
	</div>
	<div class="dropdown dropdown-top dropdown-end sm:hidden">
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
				<div
					on:click={() => {
						scrollTo('about');
					}}>
					About
				</div>
			</li>
			<li>
				<div
					<div
					on:click={() => {
						scrollTo('portfolio');
					}}>
					Portfolio
				</div>
			</li>

			<li>
				<div
					on:click={() => {
						scrollTo('media');
					}}>
					Media
				</div>
			</li>
		</ul>
	</div>

</div>
