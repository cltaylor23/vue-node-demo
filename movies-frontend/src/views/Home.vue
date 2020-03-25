<template>
  <div class="container">
    <h2>Popular Movies</h2>
    <div v-if="loading">LOADING</div>
    <div v-if="!loading">
      <div v-for="movie in popularMovies" :key="movie.id"><router-link :to="`/movie/${movie.id}`">{{movie.title}}</router-link></div>
    </div>
    <button @click="pageDown" :disabled="this.page == 1">Page Down</button>
    <span class="page-number">{{this.page}}</span>
    <button @click="pageUp" :disabled="this.page == 1000">Page Up</button>
  </div>
</template>

<script>
export default {
  name: 'PopularMovies',
  data() {
    return {
      popularMovies: [],
      page: 1,
      loading: true,
    }
  },
  async created() {
    const data = await this.getData();
    this.popularMovies = data.results;
  },
  methods: {
    async getData() {
      this.loading = true;
      let response = await fetch(`/movie/popular?page=${this.page}`);
      let data = await response.json()
      this.loading = false;
      return data;
    },
    async pageUp() {
      if (this.page < 1000) {
        this.page += 1;
        const data = await this.getData();
        this.popularMovies = data.results;
      }
    },
    async pageDown() {
      if (this.page > 1) {
        this.page -= 1;
        const data = await this.getData();
        this.popularMovies = data.results;
      }
    },
  },
}
</script>
<style scoped>
.page-number {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
