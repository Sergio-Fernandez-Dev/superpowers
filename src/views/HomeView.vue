<script></script>

<template>
  <div>
    <h1>HOME</h1>
    <table>
      <tr :v-for="(superheroe, index) in superheroes"></tr>
      <td>{{ superheroe.name }}</td>
    </table>
  </div>
</template>

<style></style>
