import { Plugin } from '@nuxt/types';

import c3 from 'c3';

declare module 'vue/types/vue' {
  interface Vue {
    $generate(conf: c3.ChartConfiguration): void;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $generate(conf: c3.ChartConfiguration): void;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $generate(conf: c3.ChartConfiguration): void;
  }
}

const myPlugin: Plugin = (_context, inject) => {
  inject('generate', (conf: c3.ChartConfiguration) => {
    c3.generate(conf);
  });
};

export default myPlugin;
