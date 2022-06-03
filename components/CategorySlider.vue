<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
  categories: { type: Array, required: true },
});
</script>

<template>
  <div class="category-slider">
    <Splide
      :options="{
        rewind: true,
        drag: true,
        snap: true,
        autoplay: false,
        pagination: false,
        perPage: 6,
        gap: '5rem',
        mediaQuery: 'max',
        padding: '5%',
        breakpoints: {
          1200: {
            perPage: 5,
          },
          1000: {
            perPage: 4,
            gap: '3rem',
          },
          600: {
            perPage: 3,
            gap: '2rem',
          },
        },
      }"
    >
      <SplideSlide v-for="category in categories">
        <CategoryItem
          :title="category.title"
          :img="category.img"
          :to="category.path"
        ></CategoryItem>
      </SplideSlide>
    </Splide>
  </div>
</template>
