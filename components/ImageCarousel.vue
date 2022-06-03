<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
  images: { type: Array, required: true },
});

const state = reactive({ currentImg: null });

function changeImage(img) {
  state.currentImg = img.node.url;
}
</script>

<template>
  <div class="product-page-image-viewer">
    <img
      :src="state.currentImg || images[0].url"
      alt=""
      class="product-page-image-image"
    />
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
      }"
    >
      <SplideSlide v-for="image in images">
        <input
          type="image"
          :src="image.node.url"
          alt=""
          class="product-page-image-input"
          @click="changeImage(image)"
          @mouseenter="changeImage(image)"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>
