import Vue from 'vue';

import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';

// Add $icons as a Vue global for consistent icon naming.
import './plugins/icons';

// Bundle fonts so we can use offline.
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
