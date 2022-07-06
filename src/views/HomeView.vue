<script>
import { apiCall } from '../services/apiCall';
import HeroCard from '../components/HeroCard.vue';

export default {
  data() {
    return {
      superheroeList: null,
    };
  },
  components: { HeroCard },
  async created() {
    this.superheroeList = await apiCall();
  },
};
</script>

<template>
  <h1>Home</h1>
  <HeroCard
    v-for="superheroe in superheroeList"
    :key="superheroe.id"
    :hero="superheroe"
  />
</template>

<style></style>
