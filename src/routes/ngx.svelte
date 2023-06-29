<script>
	import Portfolio from '../sections/Portfolio.svelte';
	import NavbarOther from '../sections/NavbarOther.svelte';
    import '@splidejs/splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { Video } from '@splidejs/splide-extension-video';
	import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

	const videos = [ 'N51UYcb0HFI'];
</script>

<svelte:head>
	<title>ngx</title>
	<link rel="icon" href="../assets/code_icon.png" />
</svelte:head>

<div class="bg-base-200">
	<NavbarOther />
	<div id="media" class="hero section min-h-screen bg-base-200 flex justify-center mt-10">
        <div class="hero-content flex align-middle justify-center text-center flex-col ">
            <br>
            <h1 class="text-5xl font-bold">Hello ngx!</h1>
            <Splide
                options={{ rewind: true, heightRatio: 0.5625, arrows: false }}
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
           <Portfolio />
        </div>
    </div>
</div>