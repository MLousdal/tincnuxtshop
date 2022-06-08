<script setup>
defineProps(["filter"]);
</script>

<template>
  <div class="tag">
    <p><slot></slot> {{ filter }}</p>
    <input type="image" src="/icons/close.svg" @click="$emit('emit')" />
  </div>
</template>
