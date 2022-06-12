import Vue from 'vue';
import LocaleFormatPlugin from '@/plugins/localFormat';
import App from './App.vue';
import store from './store';
import './components';

import './assets/sass/index.scss';

Vue.use(LocaleFormatPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
