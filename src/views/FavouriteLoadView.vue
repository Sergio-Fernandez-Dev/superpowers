<script>
import { mapState } from 'pinia';
import { useCounterStorage } from '../store/counter';

  //Se puede hacer desde cualquier otro componente, acceder a nuestro contador
    export default {
        //Nos permite monitorear la Cache de Navegador
        computed: {
            ...mapState(useCounterStorage, ['counter', 'msg'])
        }
    };
</script>
<template>
    <div>
      <h2>Icono para anadir Superheroe a FAVORITOS</h2>
      <span>{{counter}}/{{msg}}</span>
      <main></main>
    </div>
</template>
<style>

</style>