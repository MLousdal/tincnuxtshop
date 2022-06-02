<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
  products: { type: Array, required: true },
});
</script>

<template>
  <div class="product-slider">
    <Splide
      :options="{
        rewind: true,
        drag: true,
        snap: true,
        autoplay: false,
        pagination: false,
        perPage: 4,
        gap: '1rem',
        mediaQuery: 'max',
        breakpoints: {
          1150: {
            perPage: 3,
          },
          800: {
            perPage: 2,
          },
        },
      }"
    >
      <SplideSlide v-for="product in products">
        <ProductCard
          :key="product.node.id"
          :product="product.node"
        ></ProductCard>
      </SplideSlide>
    </Splide>
  </div>
</template>
