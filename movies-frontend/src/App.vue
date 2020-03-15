<template>
  <div id="app">
    <router-link to="/"><h1 id="logo">Movies</h1></router-link>
    <SearchBar/>
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import SearchBar from './components/SearchBar.vue';
export default {
  components: { SearchBar },
  watch: {
    '$route': {
      handler: function (to) {
        document.title = to.meta.title || 'Movies'
      },
      immediate: true,
    },
  },
};
</script>
<style>
  html {
      scroll-behavior: smooth;
      overflow-y: scroll;
  }
  body {
    padding-bottom: 60px;
  }
  body {
    margin: 0px;
  }
  a {
    color: black;
  }
  a:hover {
    color: gray;
  }
</style>
<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  #logo {
    display: inline-block;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
