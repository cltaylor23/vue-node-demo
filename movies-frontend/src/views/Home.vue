<template>
  <div class="container">
    <h2>Popular Movies</h2>
    <div v-for="movie in popularMovies" :key="movie.id"><router-link :to="`/movie/${movie.id}`">{{movie.title}}</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'PopularMovies',
  data() {
    return {
      popularMovies: [],
    }
  },
  async created() {
    const data = await this.getData();
    this.popularMovies = data.results;
  },
  methods: {
    async getData() {
      let response = await fetch('/movie/popular');
      let data = await response.json()
      return data;
    }
  },
}
</script>
