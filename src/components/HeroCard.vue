<script>
import StarRanking from './StarRanking.vue';
import EditButton from './EditButton.vue';
import DeleteButton from './DeleteButton.vue';
export default { components: { StarRanking, EditButton, DeleteButton } };
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
        <h2></h2>
        <li>Nombre real: <span class="info"></span></li>
        <p>Estadísticas:</p>
        <li>Inteligencia: <span class="info"></span></li>
        <li>Fuerza: <span class="info"></span></li>
        <li>Velocidad: <span class="info"></span></li>
        <li>Durabilidad: <span class="info"></span></li>
        <li>Poder: <span class="info"></span></li>
        <li>Combate: <span class="info"></span></li>
      </ul>
      <DeleteButton />
      <FavButton />
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
</style>
