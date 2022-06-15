<script>
	function scrollTo(id) {
		var element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div id="home" class="section hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
            <p class="text-xl font-semibold">Hi, I'm</p>
			<h1 class="text-5xl font-bold">Reid Patterson</h1>
			<p class="py-6">Tinkerer. Developer. Educator.</p>
			<button
				on:click={() => {
					scrollTo('about');
				}}
				class="btn btn-primary">About Me</button
			>
			<button
				on:click={() => {
					scrollTo('portfolio');
				}}
				class="btn btn-primary">My Portfolio</button
			>
		</div>
	</div>
</div>
