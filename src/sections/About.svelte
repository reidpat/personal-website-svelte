<script>
	let currentSelect = 'about';

	let seriousZ = 1;
	let smileZ = -1;
	function swap() {
		seriousZ *= -1;
		smileZ *= -1;
	}
</script>

<div id="about" class="section min-h-screen bg-base-200">
	<div class="hero-content flex-col align-middle justify-center text-center">
		<div>
			{#if currentSelect === 'about'}
				<div>
					<h1 class="text-5xl font-bold">About Me</h1>
					<div class="flex flex-col align-middle justify-center flex-wrap" id="about-pic">
						<p class="py-6 self-center">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<div id="action">
							<img
								on:mouseover={swap}
								class="portrait"
								style="z-index: {seriousZ.toString()}"
								src="MeSerious.png"
								alt=""
							/>
							<img
								on:mouseleave={swap}
								class="portrait"
								style="z-index: {smileZ.toString()}"
								src="MeFun.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			{/if}
			{#if currentSelect === 'work'}
				<div>
					<h1 class="text-5xl font-bold">My Work</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
			{/if}
			{#if currentSelect === 'interests'}
				<div>
					<h1 class="text-5xl font-bold">My Interests</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
			{/if}
			<div class="tabs flex justify-center">
				<button
					on:click={() => {
						currentSelect = 'about';
					}}
					class:tab-active={currentSelect === 'about'}
					class="tab tab-bordered">About</button
				>
				<button
					on:click={() => {
						currentSelect = 'work';
					}}
					class:tab-active={currentSelect === 'work'}
					class="tab tab-bordered">Work</button
				>
				<button
					on:click={() => {
						currentSelect = 'interests';
					}}
					class:tab-active={currentSelect === 'interests'}
					class="tab tab-bordered">Interests</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.portrait {
		height: 80%;
		border-radius: 35%;
		position: absolute;
		z-index: 1;
	}
    img{
        object-fit: contain;
    }
	#action {
		display: flex;
		position: relative;
		width: 100%;
        min-width: 300px;
        min-height: 400px;
        align-items: center;
        justify-content: center;
	}
</style>
