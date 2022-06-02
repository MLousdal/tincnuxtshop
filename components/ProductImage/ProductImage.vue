<template>
  <img
    :alt="alt"
    :height="height"
    :loading="lazy ? 'lazy' : 'eager'"
    :srcset="srcset"
    :sizes="sizes"
    :width="width"
    :src="src"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  alt?: string;
  height: string | number;
  lazy?: boolean;
  src: string;
  srcset: string;
  width: string | number;
}>();

const { alt, height, lazy, src, srcset, width } = toRefs(props);
</script>
