<template>
  <section class="copyright">
    <h2 class="visually-hidden">Copyright</h2>
    <ul class="copyright__list container">
      <li>
        <p class="copyright__list_text">
          &copy; Бренд 2023 Все права защищены.
        </p>
      </li>
      <li>
        <ul class="copyright__list_social">
          <li class="copyright__list_social_item">
            <i class="fab fa-facebook-f copyright__list_social_icon"></i>
          </li>
          <li class="copyright__list_social_item">
            <i class="fab fa-instagram copyright__list_social_icon"></i>
          </li>
          <li class="copyright__list_social_item">
            <i class="fab fa-pinterest-p copyright__list_social_icon"></i>
          </li>
          <li class="copyright__list_social_item">
            <i class="fab fa-twitter copyright__list_social_icon"></i>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "credits-vue",
});
</script>
