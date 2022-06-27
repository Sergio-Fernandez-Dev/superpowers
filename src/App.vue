<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <div class="header">
      <img src="" alt="logo" />
      <NavBar />
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>&copy; Crazy House Team</p>
  </footer>
</template>

<style>
@import '@/assets/base.css';
</style>
