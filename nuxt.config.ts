import { Configuration } from '@nuxt/types';

const config: Configuration = {
  buildModules: [
    '@nuxt/typescript-build' // <- 追加
  ],
  plugins: [
    { src: '@/plugins/c3', ssr: false }
  ],
  // head: {
  //   link: [{
  //     rel: 'stylesheet',
  //     type: 'text/css',
  //     href: 'https://raw.githubusercontent.com/c3js/c3/master/c3.css'
  //   }]
  // },
  css: [
    '@/node_modules/c3/c3.css'
  ]
};

export default config;
