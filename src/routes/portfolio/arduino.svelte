<script>
	import NavbarOther from '../../sections/NavbarOther.svelte';
	import Construction from '../../components/Construction.svelte';
</script>

<svelte:head>
	<title>Arduino Robotics</title>
	<link rel="icon" href="../assets/code_icon.png" />
</svelte:head>
<NavbarOther />
<div class="background bg-base-200 p-10 min-h-screen">
	<div
		class="content p-10 m-auto mt-20 bg-base-300 rounded-md flex flex-col justify-center text-left text-lg, max-w-4xl"
	>
		<h1 class="text-3xl bold text-center mb-3">Arduino Robotics</h1>
		<p class="text-lg text-center">A collection of labs created and taught during my time as a Cogs 300 Teaching Assistant</p>
		<img
			class="max-w-10 m-10 rounded-lg"
			src="../assets/arduino robot.jpg"
			alt="An example of the robot stopping when it sees an obstacle"
		/>

		<h2 class="text-2xl bold divider">My Role</h2>
		<p class="text-center">
			Teaching Assistant and Content Developer
		</p>

		<h2 class="text-2xl bold divider">The Project</h2>
        <p class="text-center">Teaching the Arduino robotics labs for the UBC course Cognitive Systems 300</p>
        <br>
        <strong><p class="text-center">Content Included:</p></strong>
        <ul>
            <li>Wall sensing</li>
            <li>Obstacle navigation</li>
            <li>Line following</li>
            <li>Emergent led flashing synchronization</li>
            <li>Simple neural networks</li>
        </ul>

		<h2 class="text-2xl bold divider">Examples</h2>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/bx9dvp-c9IY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		<!-- <h3 class="text-lg bold">Design Process</h3>
		<p class="mb-5" />

		<h3 class="text-lg bold">Final Product</h3> -->
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
