<template>
  <div id="movie-details-container" :key="movieId">
    <h2>Movie Details</h2>
    <div id="movie-details-justified-container">
        <div><strong>Title:</strong> {{movie.title ? movie.title : 'Movie Title Unavailable'}}</div>
        <div><strong>Release Date:</strong> {{movie.release_date ? movie.release_date : 'Release Date Unavailable'}}</div>
        <div><strong>Overview:</strong> {{movie.overview ? movie.overview : 'Overview Unavailable' }}</div>
    </div>
    <h2>Cast</h2>
    <div v-for="castMember in movie.cast" :key="castMember.id"><router-link :to="`/person/${castMember.id}`"><strong>{{castMember.character ? castMember.character : 'Unknown'}}</strong> - {{castMember.name}}</router-link></div>
    <div v-if="movie.cast.length === 0">Cast Not Found</div>
    <h2>Similar Movies</h2>
    <div v-for="movie in movie.similarMovies" :key="movie.id"><router-link :to="`/movie/${movie.id}`">{{movie.title}}</router-link></div>
    <div v-if="movie.similarMovies.length === 0">No Similar Movies Found</div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  data: () => {
    return {
      movie: {},
    }
  },
  computed: {
    movieId: function () {
      return this.$route.params.id;
    }
  },
  watch: {
    movieId: {
        async handler () {
            const data = await this.getData();
            this.movie = data;
            window.scrollTo(0, 0);
        },
        immediate: true,
    },
  },
  methods: {
    async getData() {
      let response = await fetch(`/movie/${this.movieId}`);
      let data = await response.json();
      return data;
    }
  },
}
</script>
<style scoped>
    #movie-details-container {
        width:600px;
        margin-left: auto;
        margin-right: auto;
    }
    #movie-details-justified-container {
        text-align: justify;
    }
</style>
