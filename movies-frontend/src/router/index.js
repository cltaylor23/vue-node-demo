import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Person from '../views/Person.vue';
import Movie from '../views/Movie.vue';
import SearchMovie from '../views/SearchMovie.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Movies - Home',
    },
  },
  {
    path: '/person/:id',
    name: 'person',
    component: Person,
    meta: {
      title: 'Movies - Person Details',
    },
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: Movie,
    meta: {
      title: 'Movies - Movie Details',
    },
  },
  {
    path: '/search/movie',
    name: 'search-movie',
    component: SearchMovie,
    meta: {
      title: 'Movies - Search Movie',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
