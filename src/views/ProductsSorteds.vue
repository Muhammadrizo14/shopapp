<template>
  <div>
    <Header />
    <main>
      <Heading />
      <section class="catalog container">
        <div class="catalog__grid" v-if="fff.length != 0">
          <div class="catalog__item" v-for="data in fff" v-bind:key="data.id">
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
                <span class="catalog__item-btntxt">Добавить в корзину</span>
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
        <div v-else>
          <h1 class="noproducts">Пока-что нету продуктов на этот запрос!</h1>
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
  name: "productssorted-vue",
  components: { Header, Heading },
  data() {
    return {
      data: data
    };
  },
  methods: {
    link(id) {
      return `/product/${id}`
    }
  },
  computed: {
    fff() {
      return this.data.filter(product=> product.to === this.$route.params.to && product.category === this.$route.params.sort)
    },
    aaa() {
      return 1
    }
  }
};
</script>

<style>
.noproducts {
  font-size: 66px;
}
</style>