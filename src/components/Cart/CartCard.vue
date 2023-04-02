<template>
  <li class="cart__list-item">
    <img
      :src="require('@/assets/img/' + data.imgUrl)"
      alt="Man in hoody"
      width="262"
      height="306"
      class="cart__list-img"
    />
    <div class="cart__list-wrapper">
      <h3 class="cart__list-heading">{{ data.title }}</h3>
      <p class="cart__list-text">
        Цена: <span class="cart__list-pink">{{ data.price }}</span>
      </p>
      <div class="cart__list-subwrapper">
        <label class="cart__list-text">Quantity:</label>
        <input
          type="text"
          class="cart__list-qty"
          :placeholder="data.count"
        />
      </div>
      <img
        src="@/assets/img/cross.svg"
        class="cart__list-close"
        @click="deleteFromState()"
        alt=""
      />
    </div>
  </li>
</template>

<script>
export default {
  props: ["data"],
  name: "heading-vue",
  methods: {
    deleteFromState() {
      this.$store.commit({
        type: 'removeItemFromBasket',
        value: this.data.id
      })
    }
  }
}
</script>

