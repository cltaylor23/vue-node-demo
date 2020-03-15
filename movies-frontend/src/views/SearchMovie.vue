<template>
  <div class="container" :key="query">
    <h2>Search Results</h2>
    <div v-for="movie in results" :key="movie.id"><router-link :to="`/movie/${movie.id}`">{{movie.title}}</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'SearchMovie',
  data: () => {
    return {
      results: [],
    }
  },
  computed: {
    query: function () {
      return this.$route.query.query;
    }
  },
  watch: {
    query: {
        async handler () {
            const data = await this.getData();
            this.results = data.results;
            window.scrollTo(0, 0);
        },
        immediate: true,
    },
  },
  methods: {
    async getData() {
      let response = await fetch(`/search/movie?query=${this.$route.query.query}`);
      let data = await response.json()
      return data;
    }
  },
}
</script>
