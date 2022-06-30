import {defineStore} from 'pinia';
//Uso de Contador de Storage Local de nuestro favoritos
export const useCounterStorage = defineStore({
    //Section de nuestro propiedades
    id: 'counter',
    state:()=>({
        counter:0,
        msg: "Buenas a todos esto es un mensaje"

    }),
    //Section de Getters que nos devuelve la informacion x2
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        increment(){
            this.counter ++

        }
    }
});