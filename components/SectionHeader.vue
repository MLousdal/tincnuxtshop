<script setup>
defineProps({
  title: { type: String, required: true },
  to: { type: String },
  noLink: { type: Boolean, default: false },
  more: { type: String, default: "se mere" },
});
</script>

<template>
  <header class="section-header">
    <h2>{{ title }}</h2>
    <NuxtLink :to="to" class="se-mere" v-if="!noLink"
      >{{ more }}<img src="/icons/arrow.svg" alt=""
    /></NuxtLink>
  </header>
</template>
