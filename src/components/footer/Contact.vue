<template>
  <section class="subscribe">
    <div class="container subscribe__wrapper">
      <h2 class="visually-hidden">Подписаться</h2>
      <ul class="subscribe__list">
        <li class="subscribe__list_item">
          <img
            class="subscribe__list_item_img"
            src="@/assets/img/woman_face.png"
            width="96"
            alt="Subscribe"
          />
          <p class="subscribe__list_item_text">
            Неопределенно<span class="subscribe__list_item_italic"></span>
          </p>
        </li>
        <li class="subscribe__list_item">
          <h3 class="subscribe__list_item_heading">подписываться</h3>
          <h4 class="subscribe__list_item_subheading">
            для нашей рассылки новостей и продвижения по службе
          </h4>
          <div class="subscribe__list_input_wrapper">
            <input
              class="subscribe__list_item_input"
              type="text"
              placeholder="enter your email"
            />
            <button type="submit" class="subscribe__list_item_button">
              Подписаться
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact-vue",
}
</script>
