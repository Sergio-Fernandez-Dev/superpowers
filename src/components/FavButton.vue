<script>
import { mapActions } from 'pinia';
import { favList } from '../store/favList';
export default {
  props: {
    favHero: Object,
  },
  methods: {
<<<<<<< HEAD
    ...mapActions(favList, [addHeroToFavs]),
  },
};
</script>
<!--<img src="C:\Superpowers\superpowers\src\components\icons\FavouriteButtonIcon.svg" /> -->
=======
    ...mapActions(favList, ['addHeroToFavs']),
  },
};
</script>
>>>>>>> 834d9eb86fc5a4760571dff1e5105396a3ee55df
<template>
  <button @click="addHeroToFavs(favHero)">ADD FAV</button>
</template>

<style>
.addfavourite {
  display: flex;
  justify-content: end;
  margin: 0 7px 7px 0;
}
</style>
