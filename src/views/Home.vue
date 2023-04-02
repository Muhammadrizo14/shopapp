<template>
  <Header />
  <main class="main">
    <mainBanner />
    <credits />
    <recomended />
    <delivary />
    <div class="main__overlay"></div>
  </main>
  <footer>
    <contact />
    <copyright />
  </footer>
</template>

<script>
import Header from "../components/Header.vue";
import mainBanner from "../components/mainBanner.vue";
import credits from "../components/credits.vue";
import Recomended from "../components/RecomendedProducts/recomended.vue";
import Delivary from "../components/delivary.vue";
import Contact from "../components/footer/Contact.vue";
import Copyright from "../components/footer/copyright.vue";
export default {
  name: "App",
  components: {
    Header,
    mainBanner,
    credits,
    Recomended,
    Delivary,
    Contact,
    Copyright,
  },
};
</script>