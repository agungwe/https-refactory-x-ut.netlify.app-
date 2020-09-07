<template>
  <div class="container">
    <Main>
      <HomePage />
      <template v-slot:footer>Footer</template>
      <!-- <Alive /> -->
    </Main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HomePage: () => import('./pages/HomePage'),
    Main: () => import('./layouts/Main'),
    Alive: () => import('./pages/Alive')
  },
};
</script>

<style>
</style>
