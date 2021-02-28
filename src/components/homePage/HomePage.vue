<template>
  <section class="container">
    <section>
      <h2>Estimer le prix de vos recettes</h2>
      <h3>Gagner du temps en utilisant Dofipe pour calculer vos recettes</h3>
      <input
        class="search__bar"
        type="text"
        placeholder="Nom de l'objet"
        v-model="searchBarValue"
        @keyup="getEntities()"
        @focusin="getEntities()"
        @focusout="emptyData()"
      />
      <section class="list__container" v-if="data.length !== 0">
        <ul class="list">
          <router-link
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{ liHovered: hover }"
            class="list__items"
            v-for="value in data"
            :key="value"
            :to="'/' + value.category + '/' + value.uuid"
          >
            <img class="list__img" :src=" require(`../../assets/images/${value.img}`)" />
            {{ value.name }}
          </router-link>
        </ul>
      </section>
    </section>
    <img
      class="img__side"
      src="../../assets/images/889d748cc334fe94fe992d1a675ef66d.png"
    />
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      data: [],
      searchBarValue: "",
      hover: false
    };
  },
  methods: {
    getEntities() {
      if (this.searchBarValue) {
        axios
          .get(
            `${process.env.VUE_APP_API_URL}/entity?name=${this.searchBarValue}&category=equipements`
          )
          .then(response => (this.data = response.data));
      }
    },
    emptyData() {
      setTimeout(() => {
        this.data = [];
      }, 300);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style.scss";
</style>
