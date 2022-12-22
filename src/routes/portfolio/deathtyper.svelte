<script>
	import NavbarOther from '../../sections/NavbarOther.svelte';
	import Construction from '../../components/Construction.svelte';
</script>

<svelte:head>
	<title>Death Typer</title>
	<link rel="icon" href="../assets/code_icon.png" />
</svelte:head>
<NavbarOther />
<div class="background bg-base-200 p-10 min-h-screen">
	<div
		class="content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"
	>
		<h1 class="text-3xl bold text-center mb-3">Death Typer</h1>
		<p class="text-lg text-center">A app for training faster typing speeds</p>
		<img
			class="max-w-10 m-10 rounded-lg"
			src="../assets/DeathTyper Screens.jpg"
			alt="interface for death typer"
		/>
		<a class="m-auto" href="https://death-typing.vercel.app/" target="_blank"
			><button class="glow-on-hover pl-3 pr-3">See Website</button></a
		>
		<h2 class="text-2xl bold divider">My Role</h2>
		<p class="text-center">
			Solo designer and developer creating this resource for myself to improve my typing speeds
		</p>

		<h2 class="text-2xl bold divider">The Problem</h2>
		<p>
			
		</p>

		<h2 class="text-2xl bold divider">The Solution</h2>
		<p>
			
		</p>

		<h3 class="text-lg bold">Design Process</h3>
		<p class="mb-5">
			
		</p>


		<h3 class="text-lg bold">Final Product</h3>
        <Construction />
	</div>
   
</div>

<style>
	ul {
		list-style: circle;
		text-align: left;
		margin: auto;
		justify-self: center;
		width: auto;
	}
	ol {
		list-style: decimal;
	}
	iframe {
		margin: 20px auto;
		width: 60%;
		min-width: 200px;
		height: 300px;
	}
	.drawing-slides {
		margin: 0px auto;
	}
	img {
		max-height: 400px;
		object-fit: contain;
	}
	.divider {
		padding: 20px;
		padding-top: 60px;
	}
	h1,
	h2,
	h3,
	h4 {
		margin: 20px 20px;
		font-weight: 700;
	}
</style>
