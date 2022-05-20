import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs'
    }),
    prerender: {
      default: true
    },
    paths: {
      base:  process.env.NODE_ENV === 'production' ? '/deep13' : ''
    }
  }
};

export default config;
