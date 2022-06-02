<script setup>
defineProps({
  rating: { type: Number, required: true },
});
</script>

<template>
  <div class="flex flex-gap-2" v-if="rating == 0">
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
  </div>
  <div class="flex flex-gap-2" v-if="rating == 1">
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
  </div>
  <div class="flex flex-gap-2" v-if="rating == 2">
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
  </div>
  <div class="flex flex-gap-2" v-if="rating == 3">
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
  </div>
  <div class="flex flex-gap-2" v-if="rating == 4">
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star.svg" alt="" class="star" />
  </div>
  <div class="flex flex-gap-2" v-if="rating == 5">
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
    <img src="/icons/star-filled.svg" alt="" class="star" />
  </div>
</template>
