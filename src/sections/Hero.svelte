<script>
	function scrollTo(id) {
		var element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div id="home" class="section hero min-h-screen bg-base-200">
	<div class="hero-content  text-center rounded p-10">
		<div class="max-w-md">
			<p class="text-xl font-semibold text-slate-100">Hi, I'm</p>
			<h1 class="text-5xl font-bold gradient-text" >Reid Patterson</h1>
			<p class="text-xl p-4 text-slate-100">Tinkerer. Developer. Educator.</p>
			<div class="flex flex-col m-auto">
				<button
					on:click={() => {
						scrollTo('about');
					}}
					class="btn glow-on-hover m-auto uppercase">About Me</button
				>
                <button
					on:click={() => {
						scrollTo('portfolio');
					}}
					class="btn glow-on-hover m-auto uppercase">Portfolio</button
				>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.hero-content {
		backdrop-filter: blur(5px);
		background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 1rem 0 rgba(255, 255, 255, .2); 
        width: 50%;
        max-width: 800px;
        min-width: 300px;
	}
    .container {
  width: 30rem;
  height: 20rem;
  box-shadow: 0 0 1rem 0 rgba(255, 255, 255, .2); 
  border-radius: 5px;
  position: relative;
  z-index: 2;
  background: inherit;
  overflow: hidden;
}

.container:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(0, 0, 0, .5);
  filter: blur(10px);
  margin: -20px;
}
	.btn {
		flex-shrink: 2;
		width: 150px;
		margin: 10px auto;
	}
	
</style>
