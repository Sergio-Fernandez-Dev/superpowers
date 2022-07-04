<script>
import { favList } from '../store/favList';
export default { 
      props: {
        favHero: Object

      },
      methods:{
        ...mapActions(favList,[addHeroToFavs])
      }
        
  };
</script>
  <!--<img src="C:\Superpowers\superpowers\src\components\icons\FavouriteButtonIcon.svg" /> -->
<template>
  <button @click="addHeroToFavs(favHero)">ADD FAV</button>
</template>

<style>
.addfavourite{
  display: flex;
  justify-content: end;
  margin: 0 7px 7px 0;
}
</style>
