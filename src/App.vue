<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  background-color: #141414;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
