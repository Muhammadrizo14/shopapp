<template>
  <section class="heading">
    <div class="heading__wrapper container">
      <h2 class="heading__heading">{{ title || 'new arrivals' }}</h2>
      <!-- Навигация на bootstrap -->
      <ul class="nav justify-content-end heading__menu">
        <li class="nav-item">
          <a
            class="nav-link heading__nav-link heading__nav-link-first"
            aria-current="page"
            href="#"
            >home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link heading__nav-link" href="#">man</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active heading__nav-link heading__active" href="#"
            >new arrivals</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"],
  name: "heading-vue",
}
</script>

