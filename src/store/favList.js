import { defineStore } from 'pinia';
//Uso de Contador de Storage Local de nuestro favoritos
export const favList = defineStore({
  //Section de nuestro propiedades
  state: () => {
    return { list: [] };
  },
  actions: {
    addHeroToFavs() {
      console.log(this.list);
    },
  },
});
