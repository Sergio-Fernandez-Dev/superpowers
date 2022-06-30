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
      <h2>Icono para anadir Superheroe a FAVORITOS</h2>
      <input type="text" name="test" id="test" v-model="message">
      <span>{{ counter }}/{{ message }}/{{ double }}</span>
      <main></main>
    </div>
</template>
<style>

</style>