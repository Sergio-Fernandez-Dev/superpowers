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
  <div class="delete">
    <button type="button" @click="removeHeroFromFavs(favHero)">
      <img src="./icons/DeleteButtonIcon.svg" />
    </button>
  </div>
</template>

<style>
.delete {
  display: flex;
  justify-content: end;
  margin: 0 7px 7px 0;
}
</style>
