<template>
  <img :alt="alt" :loading="lazy ? 'lazy' : 'eager'" :src="src" />
</template>

<script setup lang="ts">
const props = defineProps<{
  alt?: string;
  lazy?: boolean;
  src?: string;
}>();

const { alt, lazy, src } = toRefs(props);
</script>
