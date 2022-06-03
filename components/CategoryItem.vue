<script setup>
defineProps({
  img: { type: String, default: "" },
  to: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<template>
  <NuxtLink :to="to" class="category-item">
    <img :src="img" :alt="title" />
    <p>{{ title }}</p>
  </NuxtLink>
</template>
