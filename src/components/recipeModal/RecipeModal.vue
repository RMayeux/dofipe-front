<template>
  <section class="recipe__container">
    <section class="recipe__header">
      <img class="recipe__header__img" :src="getIcon" />
    </section>
    <section class="item__metadata">
      <input
        class="item__quantity"
        type="text"
        @focusout="updateItemQuantity($event)"
        :value="itemQuantity"
      />
      <h2 class="item__name">{{ entity.name }}</h2>
    </section>
    <ul class="ressources__container">
      <li class="ressource" v-for="ressource in ressources" :key="ressource">
        x{{ ressource.quantity }}
        <div class="ressources__img__container">
          <img
            class="ressources__img"
            :src="require('../../assets/images/' + ressource.img)"
          />
        </div>
        <section class="ressource__price">
          <input
            @keyup="splitNumbers($event, true)"
            type="text"
            @focusout="updatePrice(ressource, $event)"
            :value="splitNumbers(ressource, false)"
          />
          <img class="kamas__logo" src="../../assets/images/Kama.png" />
        </section>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "HomePage",
  props: [
    "entity",
    "ressources",
    "updatePrice",
    "itemQuantity",
    "updateItemQuantity",
    "server",
    "splitNumbers"
  ],
  computed: {
    getIcon() {
      return (
        this.entity.category + "/" + this.entity.id + ".png" &&
        require(`../../assets/images/${this.entity.img}`)
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style.scss";
</style>
