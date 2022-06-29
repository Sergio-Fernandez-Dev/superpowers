<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <img src="" alt="logo" />
      <NavBar />
    </div>
  </header>
  <RouterView />
  <footer>
    <p>&copy; Crazy House Team</p>
  </footer>
</template>

<style>
@import '@/assets/base.css';

header {
  background-color: var(--red);
  width: 100vw;
  min-height: 20px;
  padding: 0 15vw;
}
.wrapper {
  display: flex;
  justify-content: space-between;
}

.wrapper > img {
  margin: 4px 0;
}
</style>
