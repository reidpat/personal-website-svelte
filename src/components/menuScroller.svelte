<script>
    function scrollTo(id) {
		var element = document.getElementById(id.toLowerCase());
		// removing this comment breaks the code???????
		element.scrollIntoView({ behavior: 'smooth' });
	}

    export let name;
    export let classes = "";
    export let currentScroll;

</script>


<div class={classes} class:glow={currentScroll == name.toLowerCase()} on:click={() => scrollTo(name)}>{name}</div>


<style>
    .glow:before {
		opacity: 0.5 !important;
	}

	.tab {
		width: auto;
		margin: auto 5px;
		background-color: black;
	}
	.tab:after {
		background: black;
	}
	.tab:before {
		opacity: 0;
	}
</style>

