<script>
import { mapActions } from 'pinia';
import { favList } from '../store/favList';

export default {
  props: {
    favHero: Object,
  },
  methods: {
    ...mapActions(favList, ['removeHeroFromFavs']),
  },
};
</script>

<template>
  <div @click="removeHeroFromFavs(favHero)" class="delete">
    <img src="./icons/DeleteButtonIcon.svg" />
  </div>
</template>

<style>
.delete {
  display: flex;
  justify-content: end;
  margin: 0 7px 7px 0;
}
</style>
