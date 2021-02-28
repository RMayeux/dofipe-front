<template>
  <Header />
  <router-view v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<script>
import Header from "./components/header/Header";
export default {
  components: {
    Header
  }
};
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css";
@import url("./assets/font.css");
@import url("./assets/library.css");
#app {
  width: 100%;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.fade-enter-active {
  animation: coming 1s;
}

.fade-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    transform: translateX(0)
  }
  to {
    transform: translateX(-50px);
    opacity:0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-75px);
    opacity:0;
  }
  to {
    transform: translateX(0);
    opacity:1;

  }
}
</style>
