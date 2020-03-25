var express = require('express');
var apicache = require('apicache');
var fetch = require('node-fetch');

var app = express();
app.use(apicache.middleware('1 day'));

const getPopularMovies = async (page) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d3d179c1693200b240827f767bf6e1db&page=${page}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
};

const searchMovies = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=d3d179c1693200b240827f767bf6e1db`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
};

const getMovie = async (id) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d3d179c1693200b240827f767bf6e1db`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
};

const getMovieCredits = async (id) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d3d179c1693200b240827f767bf6e1db`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
};

const getSimilarMovies = async (id) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=d3d179c1693200b240827f767bf6e1db`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
};

const getPerson = async (id) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=d3d179c1693200b240827f767bf6e1db`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
};

app.get("/movie/popular", async (req, res, next) => {
    const page = req.query.page || 1;
    res.json(await getPopularMovies(page));
});

app.get("/search/movie", async (req, res, next) => {
    res.json(await searchMovies(req.query.query));
});

app.get("/movie/:id", async (req, res, next) => {
    const [movie, cast, similarMovies] = await Promise.all([
        getMovie(req.params.id),
        getMovieCredits(req.params.id).then(response => response.cast),
        getSimilarMovies(req.params.id).then(response => response),
    ]);
    const response = { ...movie, cast, similarMovies };
    res.json(response);
});

app.get("/person/:id", async (req, res, next) => {
    res.json(await getPerson(req.params.id));
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});