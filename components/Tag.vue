<script setup>
defineProps({
  filter: { type: String, required: true },
});
</script>

<template>
  <div class="tag">
    <p>{{ filter }}</p>
    <input type="image" src="/icons/close.svg" />
  </div>
</template>
