<script>
import FavButton from '../components/FavButton.vue';
//Se puede hacer desde cualquier otro componente, acceder a nuestro contador
export default {
  data() {
    return {
      hero: { id: 1, name: 'Pepe' },
    };
  },
  components: { FavButton },
  //Nos permite monitorear la Cache de Navegador
};
</script>
<!--<span>{{ count }}/{{ message }}/{{ double }}</span>-->
<template>
  <div>
    <FavButton :favHero="hero" />
  </div>
</template>
<style></style>
