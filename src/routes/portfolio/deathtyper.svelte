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
			After switching over to the Dvorak keyboard layout a few years ago, I wanted to improve my
			typing speeds and accuracy. I found that it was my accuracy which was holding me back the most
			as even small amount of errors can have a great impact because of the time needed to correct
			them. So I set out to design my own application which would force me to type accurately
			instead of trying to rush for speed first.
		</p>

		<h2 class="text-2xl bold divider">The Solution</h2>
		<p>
			To solve this problem I created a sudden death typing mode which would restart the entire
			lesson as soon as you made any mistake. This was slightly too punishing however, so I later
			modified it to restart the current word every time a mistake is made.
		</p>
		<img src="/assets/Death Typer.gif" alt="A gif showing the typing and mistakes process"/>
		<p>
			Now with an average speed of 80WPM and an accuracy of over 90% I'm much happier with my typing ability. This project has been extremely successful for me.
		</p>
		<h3 class="text-lg bold">Next Steps</h3>
		<ol>
			<li>Display collected average accuracy (data currently being collected but not averaged and displayed)</li>
			<li>Use code snippets instead of quotes to increase coding speed. Currently code typing interface is working, but a good api needs to be found/created to load a variety of code snippets.</li>
		</ol>
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
