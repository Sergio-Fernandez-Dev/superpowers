<script>
import StarRanking from './StarRanking.vue';
import EditButton from './EditButton.vue';
import DeleteButton from './DeleteButton.vue';
<<<<<<< HEAD
export default {
  data() {
    return {
      id: Number,
      name: String,
      realName: String,
      intelligence: Number,
      strength: Number,
      speed: Number,
      durability: Number,
      power: Number,
      combat: Number,
    };
  },

  components: { StarRanking, EditButton, DeleteButton },
 
};
=======
export default { components: { StarRanking, EditButton, DeleteButton } };


>>>>>>> c882ff79a11e2925040a6bf9ba5774301a1abdc5
</script>

<template>
  <div class="card">
    <div class="left-box">
      <img src="" alt="" />
      <StarRanking />
    </div>
    <div class="right-box">
      <EditButton />
      <ul class="info-list">
        <h2>{{ name }}</h2>
        <li>Nombre real:</li>
        <span class="info">{{ realName }}</span>
        <p class="separated">Estadísticas:</p>
        <li>
          Inteligencia: <span class="info">{{ intelligence }}</span>
        </li>
        <li>
          Fuerza: <span class="info">{{ strength }}</span>
        </li>
        <li>
          Velocidad: <span class="info">{{ speed }}</span>
        </li>
        <li>
          Durabilidad: <span class="info">{{ durability }}</span>
        </li>
        <li>Poder: <span class="info"></span>{{ power }}</li>
        <li>Combate: <span class="info"></span>{{ combat }}</li>
      </ul>
      <DeleteButton :id="id" />
      <FavButton :id="id" />
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
}

.right-box {
  width: 168px;
  height: 272px;
  background-color: var(--white);
  border-radius: 20px;
}

img {
  width: 168px;
  height: 250px;
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
