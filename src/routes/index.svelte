<script>
	function scrollTo(id) {
		var element = document.getElementById(id);
		element.scrollIntoView({behavior: "smooth"});
	}

  import Hero from '../sections/Hero.svelte'
  import Navbar from '../sections/Navbar.svelte'
  import About from '../sections/About.svelte'
  import Portfolio from '../sections/Portfolio.svelte'
  import Contact from '../components/Contact.svelte'
  import Media from '../sections/Media.svelte';
  import BottomNav from '../sections/BottomNav.svelte';

</script>
<div class="bg-base-200">
<div id="boids-display"></div>
<Navbar />
<Hero />

<BottomNav />
<About />
<Portfolio />
<Media />

</div>

