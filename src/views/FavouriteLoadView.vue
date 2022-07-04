<script>
import { mapState } from 'pinia';
import { useCounterStorage } from '../store/counter';

  //Se puede hacer desde cualquier otro componente, acceder a nuestro contador
    export default {
        //Nos permite monitorear la Cache de Navegador
        computed: {
            ...mapState(useCounterStorage,{
              count: 'counter',
              message: 'msg',
              double: 'doubleCount'

            })
        }
    };
</script>
<template>
    <div>
      <img src="./icons/FavouriteButtonIcon.svg" />
      <h2>Icono de anadir Superheroe a FAVORITOS</h2>
        <div class="favoritos">
          <h4>{{ title }}</h4>
          <button>Click to Add To FAVOURITES</button>
        </div>
      <input type="text" name="test" id="test" v-model="count">
      <span>{{ count }}/{{ message }}/{{ double }}</span>
      <main></main>
    </div>
</template>
<style>

</style>