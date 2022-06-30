<script>
import { apiCall } from '../services/apiCall';
import HeroCard from '../components/HeroCard.vue';
let superheroes = apiCall();
export default {
  data() {
    return {
      superheroeList: superheroes,
    };
  },
  components: { HeroCard },
};
</script>

<template>
  <h1>Home</h1>
  <div :v-for="superheroe in superheroeList">
    <HeroCard :hero="superheroe" />
  </div>
</template>

<style></style>
