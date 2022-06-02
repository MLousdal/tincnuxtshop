<script setup>
defineProps({
  author: { type: String, required: true },
  date: { type: String, required: true },
  img: { type: String, default: "se mere" },
  link: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<template>
  <NuxtLink :to="link" class="blog-post">
    <div class="blog-post-img"><img :src="img" :alt="title" /></div>
    <p class="bold">{{ title }}</p>
    <div class="flex flex-between">
      <p class="small">{{ author }}</p>
      <p class="small">{{ date }}</p>
    </div>
  </NuxtLink>
</template>
