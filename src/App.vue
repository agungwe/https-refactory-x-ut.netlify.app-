<template>
  <div class="container">
    <Navbar />
    <div class="row justify-content-center">
      <router-view class="col" name="sidebarA"></router-view>
      <router-view class="col-8 justify-content-center"></router-view>
      <router-view class="col" name="sidebarB"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
