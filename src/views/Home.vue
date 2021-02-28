<template>
  <div class="home">
    <HomePage />
  </div>
</template>
<script>
// @ is an alias to /src
import HomePage from "@/components/homePage/HomePage.vue";

export default {
  name: "Home",
  components: {
    HomePage
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color:#1E2D2F;
  height: 100vh;
  overflow: hidden;
}

.home {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
