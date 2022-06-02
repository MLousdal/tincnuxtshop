<script setup>
defineProps({
  date: { type: String, required: true },
  img: { type: String, default: "/images/towfiqu-barbhuiya.jpg" },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  verified: { type: Boolean, required: true },
});
</script>

<template>
  <article class="testimonial">
    <div class="testimonial-img">
      <img :src="`${img}`" :alt="name" />
      <div class="verified" v-if="verified" />
    </div>
    <div class="testimonial-content">
      <Stars :rating="rating"></Stars>
      <p class="bold">{{ name }}</p>
      <p>{{ review }}</p>
      <div class="flex flex-between">
        <p class="small">Anmeldelses dato:</p>
        <p class="small">{{ date }}</p>
      </div>
    </div>
  </article>
</template>
