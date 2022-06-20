<script>

import { onMount } from "svelte";
import Contact from "../components/Contact.svelte";
	function scrollTo(id) {
		var element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
	}
    let opacity = 0;
    onMount(()=>{
		window.addEventListener("scroll", scrollOpacityTop)
	})

	function scrollOpacityTop(){
		opacity = scrollY/150;
	}

   
</script>

<div class="navbar bg-base-100 fixed top-0 z-10" style="opacity: {opacity};">
	<div class="navbar-start">
		<div class="dropdown">
			<label for tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href on:click={() => {scrollTo("portfolio")}}>Portfolio</a></li>
				<li><a href on:click={() => {scrollTo("about")}}>About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<button on:click={() => {scrollTo("home")}} class="btn btn-ghost gradient-text normal-case text-xl">Reid Patterson</button>
	</div>
	<div class="navbar-end">
		<Contact />
	</div>
</div>

<style>

</style>
