import { defineStore } from 'pinia';
//Uso de Contador de Storage Local de nuestro favoritos
export const favList = defineStore({
  //Section de nuestro propiedades
  state: () => {
    return { list: [] };
  },
  //Section de Getters que nos devuelve la informacion x2
  getters: {},
  actions: {
    addHeroToFavs(hero) {
      this.list.push(hero);
    },
  },
});
