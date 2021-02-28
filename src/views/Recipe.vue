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
      server: "Ombre",
      totalPrice: 0,
      itemQuantity: 1,
      benefit: 0,
      isLoaded: false
    };
  },
  props: ["uuid"],
  beforeCreate() {
    axios
      .get(
        `${process.env.VUE_APP_API_URL}/entity/${this.uuid}`
      )
      .then(response => {
        this.entity = response.data;
        this.ressources = response.data.ressources;
        this.isLoaded = true;
      });
  },
  methods: {
    updatePrice(entity, event) {
      entity.price[this.server] = parseInt(
        event.target.value.replace(/\s/g, "")
      );
      console.log(entity.name);
      axios.put(
        `${process.env.VUE_APP_API_URL}/entity/${entity.uuid}`,
        JSON.stringify(entity)
      );
    },
    getRessourcesPrice() {
      let total = 0;
      for (const ressource of this.ressources) {
        console.log(total)
        console.log(ressource.price[this.server]);
        total += ressource.price[this.server] * ressource.quantity;
      }
      total *= this.itemQuantity;
      this.totalPrice = total;
      console.log(total);
      console.log({test:total.toString()})
      return addSpaceToString(total.toString());
    },
    getBenefit() {
      this.benefit = this.entity.price[this.server] - this.totalPrice;
      return addSpaceToString(
        (this.entity.price[this.server] - this.totalPrice).toString()
      );
    },
    updateItemQuantity(event) {
      this.itemQuantity = event.target.value;
      console.log(this.itemQuantity);
    },
    splitNumbers(prop, isEvent) {
      console.log(prop, isEvent);
      if (isEvent) {
        prop.target.value = addSpaceToString(prop.target.value);
      } else {
        return addSpaceToString(prop.price[this.server].toString());
      }
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
