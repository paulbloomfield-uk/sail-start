<template><v-app>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
  >
    <v-list dense>
      <v-list-item @click="alert">
        <v-list-item-action>
          <v-icon>{{ $icons.home }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="startTimer">
        <v-list-item-action>
          <v-icon>{{ $icons.email }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-system-bar
    app
    xcolor="indigo"
    xdark
    fixed
    clipped-left
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <!-- v-toolbar-title>Application</v-toolbar-title -->
    {{ message }}
  </v-system-bar>

  <!-- v-app-bar
    app
    color="indigo"
    dark
    fixed
    clipped-left
  -->
  <v-app-bar
    app
    fixed
    clipped-left
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    {{ message }}
  </v-app-bar>

  <v-content>
    <!-- v-container
      class="fill-height" - centres content vertically
      fluid
    -->
    <v-container
      fluid
    >
      <div class="timer-xl">{{ mainTimer | timer }}</div>
    </v-container>
  </v-content>

  <v-footer app>
    <span class="white--text">&copy; 2019</span>
  </v-footer>

</v-app></template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    message: '',
  }),
  computed: {
    mainTimer() {
      return this.$store.state.timers.ticks.main;
    }
  },
  filters: {
    timer(ts) {
      if (ts >= 0) {
        return (new Date(ts)).toISOString().slice(11, 19);
      }
      return '';
    }
  },
  methods: {
    alert(ev) {
      this.message = (ev.target.innerText);
    },

    startTimer() {
      this.$store.dispatch('startTimer', 'main');
    },
  },
};
</script>

<style lang="scss">
.timer-max {
  font-size: 12rem;
}
.timer-xl {
  font-size: 8rem;
}
.timer-lg {
  font-size: 6rem;
}
.timer-md {
  font-size: 4rem;
}
.timer-sm {
  font-size: 2rem;
}
.timer-xs {
  font-size: 1rem;
}
</style>
