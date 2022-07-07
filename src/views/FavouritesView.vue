<script>
import { favList } from '../store/favList';
import HeroCard from '../components/HeroCard.vue';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(favList, ['list']),
  },
  components: { HeroCard },
};
</script>

<template>
  <h1>Home</h1>
  <HeroCard
    v-for="superheroe in this.list"
    :key="superheroe.id"
    :hero="superheroe"
  />
</template>

<style>




</style>
