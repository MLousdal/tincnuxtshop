<script setup>
defineProps({
  img: { type: String, default: "" },
  to: { type: String, required: false },
  title: { type: String, required: false },
});
</script>

<template>
  <NuxtLink :to="to" class="category-item">
    <img :src="img" :alt="title" />
    <p>{{ title }}</p>
  </NuxtLink>
</template>
