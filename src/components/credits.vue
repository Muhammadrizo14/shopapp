<template>
  <section class="stock">
    <h2 class="visually-hidden">Stock</h2>
    <ul class="stock__list container">
      <li class="stock__item stock__item_woman">
        <h3 class="stock__item_heading">скидка 30%</h3>
        <p class="stock__item_text">Для женщин</p>
      </li>
      <li class="stock__item stock__item_man">
        <h3 class="stock__item_heading">горячая сделка</h3>
        <p class="stock__item_text">Для мужщин</p>
      </li>
      <li class="stock__item stock__item_kids">
        <h3 class="stock__item_heading">новые поступления</h3>
        <p class="stock__item_text">Для детей</p>
      </li>
      <li class="stock__item stock__item_accessoires">
        <h3 class="stock__item_heading">роскошные и модные</h3>
        <p class="stock__item_text">Аксессуары</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "credits-vue",
}
</script>
