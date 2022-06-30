<script>
import { getCurrentPath } from '../services/getCurrentPath';
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    getPath() {
      return getCurrentPath();
    },
    setName(username) {
      this.name = username;
    },
  },
};
</script>

<template>
  <nav>
    <RouterLink v-if="getPath() == '/'" to="/favourites">FAVORITOS</RouterLink>
    <RouterLink v-else to="/">HOME</RouterLink>
  </nav>
</template>

<style>
nav {
  padding: 10px 0;
}

a {
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-family: Badaboom BB;
  font-size: 28px;
  letter-spacing: 2px;
  color: var(--yellow);
}
</style>
