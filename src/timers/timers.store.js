import Vue from 'vue';

const SEC = 1000;

const timers = {};

// Round a timestamp to the nearest second.
function roundSecond(ts) {
  return Math.round(ts / SEC) * SEC;
}

export default {
  state: {
    // The last tick values of each timer.
    ticks: {},
  },

  getters: {
    getTime() {
      return name => new Date() - timers[name].startDate;
    },
  },

  mutations: {
    tickTimer(state, { name, timestamp }) {
      if (state.ticks[name] == null) {
        Vue.set(state.ticks, name, timestamp);
      } else {
        state.ticks[name] = timestamp;
      }
      console.log(state.ticks[name], Date.now() - timers[name].startDate);
    },
  },

  actions: {
    // Wait for the next tick for a timer and then tick it.
    nextTick({ commit, dispatch }, name) {
      const { startDate } = timers[name];

      // Get the exact time and round to the nearest second.
      const exact = (new Date()).valueOf();

      const timestamp = roundSecond(exact - startDate.valueOf());

      // Set the timer to the nearest second.
      commit('tickTimer', { name, timestamp });

      // Set the next tick to the next second.
      setTimeout(() => {
        dispatch('nextTick', name);
      }, 1000 + startDate.valueOf() + timestamp + exact - 2 * new Date().valueOf());
    },

    // Start a timer.
    startTimer({ dispatch }, name) {
      // Create the timer if it doesn't exist.
      let timer = timers[name];
      if (timer == null) {
        timers[name] = {};
        timer = timers[name];
      }

      // Check the timer is started.
      if (!timer.isStarted) {
        timer.isStarted = true;
        timer.startDate = new Date();
        dispatch('nextTick', name);
      }
    },
  },
};
