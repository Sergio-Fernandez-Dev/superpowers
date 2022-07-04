import path from 'path';
import { createRouter, createWebHistory } from 'vue-router';
import FavouritesView from '../views/FavouritesView.vue';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue';
import FavouriteLoadView from '../views/FavouriteLoadView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    {
      path: '/favouriteload',
      name: 'favouriteload',
      component: FavouriteLoadView,
    },
  ],
});

export default router;
