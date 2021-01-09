<template>
  <div id="app">
    <router-view />
    <loading v-if="loading"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Loading } from '@/components';

export default {
  components: {
    Loading,
  },
  name: 'App',
  computed: {
    ...mapGetters(['loading']),
  },
};
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: MicrosoftYaHei, 'Avenir', Helvetica, Arial, sans-serif;
  height: 100vh;
  overflow: auto;
}
</style>
