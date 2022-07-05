<script>
import { mapState } from 'pinia';
import { favList } from '../store/favList';
import { FavButton } from '../components/FavButton';
//Se puede hacer desde cualquier otro componente, acceder a nuestro contador
export default {
  data() {
    return {
      hero: { id: 1, name: Pepe },
    };
  },
  components: { FavButton },
  //Nos permite monitorear la Cache de Navegador
  computed: {
    ...mapState(favList),
  },
  methods: {
    ...mapActions(favList, [addHeroToFavs]),
  },
};
</script>
<!--<span>{{ count }}/{{ message }}/{{ double }}</span>-->
<template>
  <div>
    <FavButton :favHero="hero" />
  </div>
</template>
<style></style>
