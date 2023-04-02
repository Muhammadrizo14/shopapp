<template>
  <div>
    <Header />
    <main>
      <Heading />
      <section class="catalog container">
        <div class="catalog__grid">
          <div class="catalog__item" v-for="(data, i) in data" v-bind:key="i">
            <div class="catalog__item-imgwrapper">
              <img
                class="catalog__item-img"
                :src="require('@/assets/img/' + data.imgUrl)"
                alt="A man with the backpack"
              />
              <div class="catalog__item-overlay"></div>
              <button
                type="button"
                class="catalog__item-button"
                @click="
                  this.$store.commit({ type: 'addItemtoBasket', value: data })
                "
              >
                <img
                  src="@/assets/img/basket.svg"
                  alt="Добавить в корзину"
                  class="catalog__item-btnimg"
                />
                <span class="catalog__item-btntxt">Add to cart</span>
              </button>
            </div>
            <router-link :to="link(data.id)">
              <h3 class="catalog__item-heading">{{ data.title }}</h3>
              <p class="catalog__item-text">
                {{ data.description }}
              </p>
              <p class="catalog__item-price">{{ data.price }}</p>
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Heading from "@/components/Heading.vue";
import data from "@/data.json";

export default {
  name: "products-vue",
  components: { Header, Heading },
  data() {
    return {
      data: data,
    };
  },
  methods: {
    link(id) {
      return `/product/${id}`
    }
  }
};
</script>