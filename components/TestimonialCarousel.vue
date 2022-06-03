<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
  testimonials: { type: Array, required: true },
});
</script>

<template>
  <div class="testimonial-carousel">
    <Splide
      :options="{
        rewind: true,
        autoplay: false,
        perPage: 1,
        perMove: 1,
        pagination: false,
        pauseOnHover: true,
      }"
      aria-label="Testimonials"
    >
      <SplideSlide v-for="testimonial in testimonials">
        <Testimonial
          :date="testimonial.date"
          :img="testimonial.img"
          :name="testimonial.name"
          :rating="testimonial.rating"
          :review="testimonial.review"
          :verified="testimonial.verified"
        ></Testimonial>
      </SplideSlide>
    </Splide>
  </div>
</template>
