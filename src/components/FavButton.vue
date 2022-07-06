<script>
import { mapActions } from 'pinia';
import { favList } from '../store/favList';

export default {
  props: {
    favHero: Object,
  },
  methods: {
    ...mapActions(favList, ['addHeroToFavs']),
  },
};
</script>
<template>
  <button type="submit" @click.prevent="addHeroToFavs(favHero)">ADD FAV</button>
</template>

<style>
.addfavourite {
  display: flex;
  justify-content: end;
  margin: 0 7px 7px 0;
}
</style>
