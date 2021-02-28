<template>
  <nav class="header__container">
    <router-link class="navLink" :to="{ name: 'Home' }">DOFIPE</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style.scss";
</style>
