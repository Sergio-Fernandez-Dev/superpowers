<script>
<<<<<<< HEAD
import { mapState } from 'pinia';
import { favList } from '../store/favList';
import { FavButton } from '../components/FavButton';
=======
import FavButton from '../components/FavButton.vue';
>>>>>>> 834d9eb86fc5a4760571dff1e5105396a3ee55df
//Se puede hacer desde cualquier otro componente, acceder a nuestro contador
export default {
  data() {
    return {
<<<<<<< HEAD
      hero: { id: 1, name: Pepe },
=======
      hero: { id: 1, name: 'Pepe' },
>>>>>>> 834d9eb86fc5a4760571dff1e5105396a3ee55df
    };
  },
  components: { FavButton },
  //Nos permite monitorear la Cache de Navegador
<<<<<<< HEAD
  computed: {
    ...mapState(favList),
  },
  methods: {
    ...mapActions(favList, [addHeroToFavs]),
  },
=======
>>>>>>> 834d9eb86fc5a4760571dff1e5105396a3ee55df
};
</script>
<!--<span>{{ count }}/{{ message }}/{{ double }}</span>-->
<template>
  <div>
    <FavButton :favHero="hero" />
  </div>
</template>
<style></style>
