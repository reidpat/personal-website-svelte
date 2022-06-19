import adapter from '@sveltejs/adapter-netlify';
import autoPreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			define: {
			  'process.env': process.env,
			},
		  },
	},
	preprocess: autoPreprocess()
};



export default config;

