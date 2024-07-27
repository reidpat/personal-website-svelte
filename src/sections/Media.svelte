<script>
	import '@splidejs/splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { Video } from '@splidejs/splide-extension-video';
	import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

	const videos = ['ge8zRYmy4Yc', 'XCs3OkDXU0M','u2Q-nMUDmvU'];
</script>

<div id="media" class="hero section min-h-screen bg-base-200 flex justify-center">
	<div class="hero-content flex align-middle justify-center text-center flex-col ">
		<h1 class="text-5xl font-bold">Media</h1>
		<Splide
			options={{ rewind: true, heightRatio: 0.5625 }}
			extensions={{ Video }}
			aria-labelledby="video-example-heading"
		>
			{#each videos as id, index}
				<SplideSlide data-splide-youtube={id}>
					<img
						src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
						alt={`YouTube Sample ${index + 1}`}
					/>
				</SplideSlide>
			{/each}
		</Splide>
		<!-- <div class="flex justify-center w-full py-2 gap-2">
			<a href="#media-item1"><button class="btn btn-circle glow-on-hover bright">1</button></a>
			<a href="#media-item2"><button class="btn btn-circle glow-on-hover bright">2</button></a>
		</div> -->
		<!-- <div class="carousel w-full">
			<div class="iframe-container carousel-item w-full" id="media-item1">
				<progress
					class="progress progress-secondary w-80"
					style="display: {showLoading}; left: 50%; top: 50%"
				/>
				<Lazy>
					<iframe
						src="https://www.youtube.com/embed/R1Z-T8IQxbQ"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						on:load={iframeLoad}
					/>
				</Lazy>
			</div>
			<div class="iframe-container carousel-item w-full" id="media-item2">
				<Lazy>
					<iframe
						class="carousel-item w-full"
						src="https://www.youtube.com/embed/cqaQNkmpyQ4"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</Lazy>
			</div>
		</div> -->
	</div>
</div>

<style>
	.iframe-container {
		/* position: relative;
		overflow: hidden; */
		/* width: 90vw; */
		max-width: 1200px;
		height: 50vw;
		min-height: 200px;
		max-height: 600px;
	}
	/* iframe {
		position: absolute;
		top: 0;
		left: 10%;
		bottom: 0;
		right: 10%;
		width: 80%;
		height: 100%;
	} */
</style>
