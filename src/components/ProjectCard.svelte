<script>
	export let url = '';
	export let alt = '';
	export let title = '';
	export let description = '';
	// export let topBadge = '';
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
		<button class="btn uppercase glow-on-hover mt-3">Learn More</button>
	</div>
</div>

<style>
    .card{
        box-shadow: 0 0 1rem 0 rgb(255 255 255 / 20%);
        width: 80%;
        min-width: 250px;
        max-width: 400px;
        margin: 10px;
    }
    img{
        height: 200px;
        width: 100%;
        object-fit: cover;
    }
</style>