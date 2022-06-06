<script setup>
defineProps({
  wishlist: Boolean,
});

const state = reactive({ wishlisted: false });
</script>

<template>
  <input
    type="image"
    src="/icons/close.svg"
    alt=""
    class="favoriteBtn"
    v-if="wishlist"
  />
  <input
    type="image"
    :src="
      state.wishlisted ? '/icons/like-filled.svg' : '/icons/like-outline.svg'
    "
    alt=""
    class="favoriteBtn"
    @click="state.wishlisted = !state.wishlisted"
    v-else
  />
</template>
