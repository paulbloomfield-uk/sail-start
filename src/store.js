import Vue from 'vue';
import Vuex from 'vuex';

import timers from './timers/timers.store';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    timers,
  },
});
