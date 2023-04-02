<template>
  <div>
    <HeaderVue />
    <main>
      <Heading title="shopping cart" />
      <section class="cart container">
        <h2 class="visually-hidden">корзина</h2>
        <div class="cart__wrapper">
          <ul class="cart__list" v-if="this.$store.getters.getAllInBasket.length > 0">
            <CartCard  v-for="curData in this.$store.getters.getAllInBasket" v-bind:key="curData.id" :data="curData" />
          </ul>
          <h1 v-else>
            Вы не добавили товар!
          </h1>
          <ul class="cart__list-buttons">
            <li>
              <button type="reset" class="cart__list-button" @click="this.$store.commit('removeAllFromBasket')">
                clear shopping cart
              </button>
            </li>
            <li>
              <router-link
                to="/catalog"
                type="button"
                class="cart__list-button"
              >
                continue shopping
              </router-link>
            </li>
          </ul>
        </div>
        <div class="cart__shipping_wrapper">
          <div class="cart__total">
            <div class="cart__total_text_wrapper">
              <p class="cart__subtotal_text">sub total {{this.$store.getters.getTotalPrice}}</p>
              <p class="cart__grandtotal_text">grand total {{this.$store.getters.getTotalPrice}}</p>
            </div>
            <div class="cart__total_checkout_wrapper">
              <hr class="cart__total_line" />
              <button type="submit" class="cart__total_checkout">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
        <div class="main__overlay"></div>
      </section>
    </main>
  </div>
</template>

<script>
import CartCard from "@/components/Cart/CartCard.vue";
import HeaderVue from "@/components/Header.vue";
import Heading from "@/components/Heading.vue";
export default {
  name: "cart-vue",
  components: {
    HeaderVue,
    Heading,
    CartCard,
  },
}
</script>