<script>
	import Contact from '../components/Contact.svelte';
	function scrollTo(id) {
		var element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
		console.log(element);
	}
</script>

<div class="navbar bg-base-100 fixed top-0 z-10">
	<div class="navbar-start">
		<a href="/" target="_self"><button class="glow-on-hover pl-3 pr-3"><img src="/home.png" alt="home button" /></button></a>
	</div>
	<div class="navbar-center">
		<button
			on:click={() => {
				scrollTo('home');
			}}
			class="btn btn-ghost gradient-text normal-case text-xl">Reid Patterson</button
		>
	</div>
	<div class="navbar-end">
		<Contact />
	</div>
</div>

<style>
		img {
		height: 30px;
	}
</style>
