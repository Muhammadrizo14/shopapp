<template>
  <li class="featured__item">
    <div class="featured__item_imgwrapper">
      <img
        class="featured__item_img"
        :src="require('../../assets/img/' + data.imgUrl)"
        alt="A man with the backpack"
      />
      <div class="featured__item_overlay"></div>
      <button @click="addToCart()" type="button" class="featured__item_button">
        <img
          src="@/assets/img/basket.svg"
          alt="Добавить в корзину"
          class="featured__item_btnimg"
        />
        <span class="featured__item_btntxt">Add to cart</span>
      </button>
    </div>
    <router-link :to="link(data.id)">
      <h3 class="featured__item_heading">{{ data.title }}</h3>
      <p class="featured__item_text">
        {{ data.description }}
      </p>
      <p class="featured__item_price">{{ data.price }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["data"],
  name: "Card-vue",
  data() {
    return {
      product: this.data,
    };
  },
  methods: {
    addToCart() {
      this.$store.commit({ type: "addItemtoBasket", value: this.product });
    },
    link(id) {
      window.scroll(0,0)
      return `product/${id}`
    },
  },
};
</script>
