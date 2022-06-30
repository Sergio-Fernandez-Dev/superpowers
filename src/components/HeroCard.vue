<script>
import { getCurrentPath } from '../services/getCurrentPath';
import StarRanking from './StarRanking.vue';
import EditButton from './EditButton.vue';
import DeleteButton from './DeleteButton.vue';
<<<<<<< HEAD
export default {
  data() {
    return {
      hero: Object,
    };
  },
  components: {
    StarRanking,
    EditButton,
    DeleteButton,
  },
  methods: {
    getCurrentPath,
  },
  props: {
    id: this.hero.id,
  },
};
=======
export default { components: { StarRanking, EditButton, DeleteButton } };


<<<<<<< HEAD
>>>>>>> c882ff79a11e2925040a6bf9ba5774301a1abdc5
=======
>>>>>>> 2f489d84b74dd6a347fdf20e4be0579e0ef6a70a
>>>>>>> 0e0f38b5e680b83eb9acb8d429fd9dedb1aa7cbf
</script>

<template>
  <div class="card">
    <div class="left-box">
      <img src="" alt="" />
      <StarRanking v-if="getCurrentPath() == '/favourites'" />
    </div>
    <div class="right-box">
      <EditButton v-if="getCurrentPath() == '/favourites'" />
      <ul class="info-list">
        <h2>{{ hero.name }}</h2>
        <li>Nombre real:</li>
        <span class="info">{{ hero.biography.fullName }}</span>
        <p class="separated">Estadísticas:</p>
        <li>
          Inteligencia:
          <span class="info">{{ hero.powerstats.intelligence }}</span>
        </li>
        <li>
          Fuerza:
          <span class="info">{{ hero.powerstats.strength }}</span>
        </li>
        <li>
          Velocidad:
          <span class="info">{{ hero.powerstats.speed }}</span>
        </li>
        <li>
          Durabilidad:
          <span class="info">{{ hero.powestats.durability }}</span>
        </li>
        <li>
          Poder:
          <span class="info">{{ hero.powerstats.power }}</span>
        </li>
        <li>
          Combate:
          <span class="info">{{ hero.powerstats.combat }}</span>
        </li>
      </ul>
      <DeleteButton :id="id" v-if="getCurrentPath() == '/favourites'" />
      <FavButton v-else :id="id" />
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 526px;
  height: 341px;
  background-color: var(--navy);
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.left-box {
  width: 168px;
  height: 272px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  background-color: var(--white);
  border-radius: 20px;
}

.right-box {
  width: 168px;
  height: 272px;
  background-color: var(--white);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  background-color: var(--white);
  border-radius: 20px;
}

li {
  list-style-type: none;
}

h2 {
  color: var(--text);
  font-size: 16px;
}

p {
  color: var(--text);
}

.separated {
  margin-top: 8px;
}

.info {
  color: var(--info);
}
</style>
