<script setup>
// defineProps({
//   favorite: Boolean,
// });

const state = reactive({ wishlisted: false });
</script>

<template>
  <input
    type="image"
    :src="
      state.wishlisted ? '/icons/like-filled.svg' : '/icons/like-outline.svg'
    "
    alt=""
    class="favoriteBtn"
    @click="state.wishlisted = !state.wishlisted"
  />
</template>
