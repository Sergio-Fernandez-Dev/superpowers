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
    <p class="footer">&copy; Crazy House Team 2022</p>
  </footer>
</template>

<style>
@import '@/assets/base.css';

header {
  background-color: var(--red);
  width: 100vw;
  min-height: 20px;
  padding: 0 35px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
}

.wrapper > img {
  margin: 4px 0;
}
.footer{
  background-color: var(--red);
  height: 71px;
  font-family: Kdam Thmor Pro, Arial, Helvetica, sans-serif;
  color: var(--white);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 31px;
}


</style>
