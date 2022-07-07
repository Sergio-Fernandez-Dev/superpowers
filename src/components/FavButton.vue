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
  <div @click.prevent="addHeroToFavs(favHero)">
    <img src="" />
  </div>
</template>

<style>
.addfavourite {
  display: flex;
  justify-content: end;
  margin: 0 7px 7px 0;
}
</style>
