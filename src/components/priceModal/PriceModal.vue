<template>
  <ul class="price__modal__container">
    <h2 class="price__modal__title">Résumé</h2>
    <li class="price__modal__li">
      <h3 class="price__li__title">Prix de l'objet</h3>
      <input
        @keyup="splitNumbers($event, true)"
        type="text"
        @focusout="updatePrice(entity, $event)"
        :value="splitNumbers(entity, false)"
      />
    </li>
    <li class="price__modal__li">
      <h3 class="price__li__title">Prix des ressources</h3>
      <p>- {{ getRessourcesPrice() }}</p>
    </li>
    <hr class="solid">
    <li class="price__modal__li">
      <h3 class="price__li__title">Bénéfices</h3>
      <p v-if="benefit >= 0" class="benefit positive">+{{ getBenefit() }}</p>
      <p v-else class="benefit negative">{{ getBenefit() }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  props: [
    "entity",
    "ressources",
    "getRessourcesPrice",
    "server",
    "updatePrice",
    "splitNumbers",
    "getBenefit",
    "benefit"
  ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style.scss";
</style>
