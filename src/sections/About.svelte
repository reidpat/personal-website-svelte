<script>
	let currentSelect = 'about';

	let seriousZ = 1;
	let smileZ = -1;
	function swap() {
		seriousZ *= -1;
		smileZ *= -1;
	}
	let openInterest = false;

	let title = 'title';
	let content = 'content';
	let img = '';

	function openModal(item) {
		openInterest = true;
		title = item;

		switch (item) {
			case 'Personal Knowledge Management':
				img = 'obsidian-icon';
				content =
					'Personal Knowledge Management (PKM) is the practice of creating and maintaining a system where an individual can keep track of a large volume';
				break;
			case 'Music':
				img = 'ukulele';
				content = 'Music has been one of my passions since I was a child';
				break;
			case 'Pedagogy':
				img = 'pedagogy';
				content =
					'Personal Knowledge Management (PKM) is the practice of creating and maintaining a system.';
				break;
			case 'Dungeons and Dragons':
				img = 'dndDice';
				content =
					'Personal Knowledge Management (PKM) is the practice of creating and maintaining a system.';
				break;
			case 'Meditation':
				img = 'meditation';
				content =
					'Personal Knowledge Management (PKM) is the practice of creating and maintaining a system.';
				break;
			case 'Humane Tech':
				img = 'humane tech';
				content =
					'Personal Knowledge Management (PKM) is the practice of creating and maintaining a system.';
				break;
		}
	}
</script>

<label
	for="interest-modal"
	class="modal cursor-pointer"
	class:modal-open={openInterest}
	on:click|self={() => {
		openInterest = false;
	}}
>
	<label class="modal-box relative" for=" ">
		<div id="interest-modal-image" class="glow-small flex justify-center">
			<img src="assets/{img}.png" alt="obsidian icon" />
		</div>
		<h3 class="text-lg font-bold">{title}</h3>
		<p class="py-4">{content}</p>
	</label>
</label>

<div id="about" class="hero section min-h-screen bg-base-200 flex justify-center">
	<div class="hero-content flex align-middle justify-center text-center">
			{#if currentSelect === 'about'}
				<div class="w-full">
					<h1 class="text-5xl font-bold">About Me</h1>
					<div class="flex align-middle justify-center flex-wrap" id="about-pic">
						<div id="about-desc" class="py-6 text-xl text-left self-center">
							<p class="text-2xl italic mb-3">Hello, I'm Reid!</p>
							<p class="mb-3">
								I'm an educator and developer living in Vancouver, BC.
							</p>
							<p class="mb-3">
								By day, I work at <a class="gradient-text" href="https://geeringup.apsc.ubc.ca/"
									>UBC Geering Up</a
								>
								as a computer science instructor and web developer - building web apps for Geering Up and helping K-12 teachers bring
								topics like AI and Digital Literacy into their classrooms.
							</p>
							<p>
								By night, I moonlight as a tech tinkerer - making helpful tools & websites, working with training machine learning models, and experimenting with algorithmically generated art.
							</p>
						</div>
						<div id="action">
							<img
								on:mouseover={swap}
								class="portrait"
								style="z-index: {seriousZ.toString()}"
								src="MeSerious.webp"
								alt=""
							/>
							<img
								on:mouseleave={swap}
								class="portrait"
								style="z-index: {smileZ.toString()}"
								src="MeFun.webp"
								alt=""
							/>
						</div>
					</div>
				</div>
			{/if}
			<!-- {#if currentSelect === 'work'}
				<div>
					<h1 class="text-5xl font-bold">My Work</h1>
					<p class="py-6">I'm currently working at Geering Up
					</p>
				</div>
			{/if} -->
			<!-- {#if currentSelect === 'interests'}
				<div>
					<h1 class="text-5xl font-bold">My Interests</h1>
					<div class="flex flex-wrap justify-center m-20">
						<div class="glow" on:click={() => openModal('Personal Knowledge Management')}>
							<img src="assets/obsidian-icon.png" alt="obsidian icon" />
							<p>PKM</p>
						</div>
						<div class="glow" on:click={() => openModal('Music')}>
							<img src="assets/ukulele.png" alt="ukulele icon" />
							<p>Music</p>
						</div>
						<div class="glow" on:click={() => openModal('Pedagogy')}>
							<img src="assets/pedagogy.png" alt="teaching icon" />
							<p>Pedagogy</p>
						</div>
						<div class="glow" on:click={() => openModal('Dungeons and Dragons')}>
							<img src="assets/dndDice.png" alt="teaching icon" />
							<p>D&D</p>
						</div>
						<div class="glow" on:click={() => openModal('Meditation')}>
							<img src="assets/meditation.png" alt="teaching icon" />
							<p>Meditation</p>
						</div>
						<div class="glow" on:click={() => openModal('Humane Tech')}>
							<img src="assets/humane tech.png" alt="teaching icon" />
							<p>Humane Tech</p>
						</div>
					</div>
				</div>
			{/if} -->
			<!-- <div class="tabs flex justify-center">
				<button
					on:click={() => {
						currentSelect = 'about';
					}}
					class:tab-active={currentSelect === 'about'}
					class="tab tab-lg tab-bordered">About</button
				>
				<button
					on:click={() => {
						currentSelect = 'interests';
					}}
					class:tab-active={currentSelect === 'interests'}
					class="tab tab-lg tab-bordered">Interests</button
				>
			</div> -->
	</div>
</div>

<style>
	#about{
		max-width: 99vw;
	}
	.portrait {
		height: 80%;
		border-radius: 35%;
		position: absolute;
		z-index: 1;
	}
	img {
		object-fit: contain;
	}
	#action {
		display: flex;
		position: relative;
		width: 30%;
		min-width: 300px;
		min-height: 400px;
		align-items: center;
		justify-content: center;
	}
	#about-desc {
		width: 65%;
		max-width: 600px;
		min-width: 250px;
	}
	.modal-box {
		border-radius: 10px;
		overflow: visible;
	}
	#interest-modal-image {
		position: absolute;
		top: -10px;
		right: -10px;
		border-radius: 100%;
		background-color: #111;
		width: 50px;
		height: 50px;
		align-items: center;
	}
	#interest-modal-image > img {
		position: absolute;
		width: 60%;
	}

	.glow {
		/* width: 220px; */
		width: 200px;
		height: 200px;
		margin: 20px;
		border-radius: 100%;
		border: none;
		outline: none;
		color: #fff;
		background: #111;
		cursor: pointer;
		position: relative;
		z-index: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	/* .gradient-text{
    background-image: linear-gradient(60deg, #E21143, #FFB03A);
    background-clip: text;
    color: transparent;
} */
	.hero-content {
		width: 99vw;
		max-width: none;
		margin: 0px 15px;
	}
	.glow > img {
		max-width: 55%;
	}
	.glow:before,
	.glow-small:before {
		content: '';
		background: linear-gradient(45deg, #ff0000, #ff00c8, #002aff, #7b00ff, #ff00c8, #ff0000);
		position: absolute;
		top: -2px;
		left: -2px;
		background-size: 400%;
		z-index: -1;
		filter: blur(5px);
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		animation: glowing 60s linear infinite;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		border-radius: 100%;
	}

	.glow:active:after {
		background: transparent;
	}
	.glow:before {
		opacity: 0.3;
	}
	.glow-small:before {
		opacity: 1;
	}
	.glow:hover:before {
		opacity: 1;
	}

	.glow:after,
	.glow-small:after {
		z-index: -1;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: #111;
		left: 0;
		top: 0;
		border-radius: 100%;
	}

	.black.glow:after {
		background: black;
	}

	@keyframes glowing {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}
</style>
