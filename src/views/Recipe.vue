<template>
  <div v-if="isLoaded === true" class="home">
    <RecipeModal
      :entity="entity"
      :ressources="ressources"
      :updatePrice="updatePrice"
      :itemQuantity="itemQuantity"
      :updateItemQuantity="updateItemQuantity"
      :server="server"
      :splitNumbers="splitNumbers"
      :updateServer="updateServer"
    />
    <PriceModal
      :entity="entity"
      :ressources="ressources"
      :getRessourcesPrice="getRessourcesPrice"
      :server="server"
      :updatePrice="updatePrice"
      :splitNumbers="splitNumbers"
      :getBenefit="getBenefit"
      :benefit="benefit"
    />
  </div>
</template>
<script>
// @ is an alias to /src
import RecipeModal from "@/components/recipeModal/RecipeModal.vue";
import PriceModal from "../components/priceModal/PriceModal.vue";
import axios from "axios";
import { addSpaceToString } from "../helpers/string";

export default {
  name: "Recipe",
  components: {
    RecipeModal,
    PriceModal
  },
  data() {
    return {
      entity: {},
      ressources: [],
      server: "Ilyzaelle",
      totalPrice: 0,
      itemQuantity: 1,
      benefit: 0,
      isLoaded: false
    };
  },
  props: ["uuid"],
  beforeCreate() {
    axios
      .get(`${process.env.VUE_APP_API_URL}/entity/${this.uuid}`)
      .then(response => {
        this.entity = response.data;
        this.ressources = response.data.ressources;
        this.isLoaded = true;
      });
  },
  mounted() {
    if (localStorage.server) {
      this.server = localStorage.server;
    }
  },
  methods: {
    updatePrice(entity, event) {
      entity.price[this.server] = parseInt(
        event.target.value.replace(/\s/g, "")
      );
      axios.put(
        `${process.env.VUE_APP_API_URL}/entity/${entity.uuid}`,
        JSON.stringify(entity)
      );
    },
    getRessourcesPrice() {
      console.log(this.server);
      let total = 0;
      for (const ressource of this.ressources) {
        total += ressource.price[this.server] * ressource.quantity;
      }
      total *= this.itemQuantity;
      this.totalPrice = total;
      return addSpaceToString(total.toString());
    },
    getBenefit() {
      this.benefit =
        this.entity.price[this.server] * this.itemQuantity - this.totalPrice;
      return addSpaceToString(
        (
          this.entity.price[this.server] * this.itemQuantity -
          this.totalPrice
        ).toString()
      );
    },
    updateItemQuantity(event) {
      this.itemQuantity = event.target.value;
    },
    splitNumbers(prop, isEvent) {
      if (isEvent) {
        prop.target.value = addSpaceToString(prop.target.value);
      } else {
        return addSpaceToString(prop.price[this.server].toString());
      }
    },
    updateServer(event) {
      this.server = event.target.value;
      localStorage.server = event.target.value;
      console.log(this.server);
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #1e2d2f;
  height: 100vh;
  overflow: hidden;
}

.home {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
