<template>
  <section class="featured container">
    <h2 class="featured__heading">Рекомендуемые товары</h2>
    <p class="featured__text">
      Покупайте товары, основанные на том, что мы представили на этой неделе
    </p>
    <ul class="featured__list">
      <Card v-for="data in products.slice(0, 6)" v-bind:key="data.id" :data="data" />
    </ul>
    <router-link class="featured__link" to="/catalog">
      <div class="featured__button">Просмотреть все товары</div></router-link 
    >
  </section>
</template>

<script>
import Card from "./Card.vue";
import data from "@/data.json";

export default {
  components: { Card },
  name: "credits-vue",
  data(){
    return {
      products: data
    }
  },    
};
</script>
