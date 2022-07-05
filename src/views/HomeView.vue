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
  <div v-for="superheroe in superheroeList" :key="superheroe.id">
    <p>{{ superheroe.name }}</p>
    <HeroCard :hero="superheroe" />
  </div>
</template>

<style></style>
