<script>
	export let url = '';
	export let alt = '';
	export let title = '';
	export let description = '';
	export let topBadge = '';
	export let link = '';
	export let bottomBadges = [];
</script>

<div class="card w-96 bg-base-100 rounded-md shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)">
	<figure><img src={url} {alt} /></figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title gradient-text uppercase">
			{title}
		</h2>
		<!-- <div class="badge badge-primary">{topBadge}</div> -->
		<p>{description}</p>
		<div class="card-actions justify-center">
			{#each bottomBadges as badge}
				<div class="badge badge-outline">{badge}</div>
			{/each}
		</div>
		<a href={`/portfolio/${link}`}  target="_self" ><button  class="btn uppercase glow-on-hover mt-3">Learn More</button></a>
	</div>
</div>

<style>
	.card {
		box-shadow: 0 0 2rem 0 rgb(255 255 255 / 30%);
		width: 50vw !important;
		min-width: 250px;
		max-width: 350px;
		height: 550px;
		/* margin: 10px; */
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
	}
	img {
		height: 200px;
		width: 100%;
		object-fit: contain;
	}
</style>
