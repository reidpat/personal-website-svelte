<script>
	function scrollTo(id) {
		var element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div id="home" class="section hero min-h-screen bg-base-200">
	<div class="hero-content text-center rounded p-10">
		<div class="max-w-md">
			<p class="text-xl font-semibold text-slate-100">Hi, I'm</p>
			<h1 class="text-5xl font-bold" id="name">Reid Patterson</h1>
			<p class="text-xl p-4 text-slate-100">Tinkerer. Developer. Educator.</p>
			<div class="flex flex-col m-auto">
				<button
					on:click={() => {
						scrollTo('about');
					}}
					class="btn glow-on-hover m-auto">About Me</button
				>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.hero-content {
		backdrop-filter: blur(4px);
		background-color: rgba(255, 255, 255, 0.15);
	}
	.btn {
		flex-shrink: 2;
		width: 150px;
		margin: 10px auto;
	}
	.glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

#name{
	color: hsl(var(--s))
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000,#ff00c8, #002aff, #7b00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 60s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}


.glow-on-hover:active:after {
    background: transparent;
}
.glow-on-hover:before {
    opacity: 0.3;
}
.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>
