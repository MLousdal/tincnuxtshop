<script setup>
import { useWishlistStore } from "~/stores/wishlist";
defineProps({
  wishlist: Boolean,
  product: Object,
});

const wishlistStore = useWishlistStore();
const wishlistProducts = computed(() => wishlistStore.wishlist);
const state = reactive({ wishlisted: false });

function addToWishlist(product) {
  if (
    wishlistProducts.value.some(
      (wishlistProduct) => wishlistProduct.id === product.id
    )
  ) {
    return;
  }
  wishlistStore.addProductToWishlist(product);
  state.wishlisted = !state.wishlisted;
}

function removeFromWishlist(product) {
  wishlistStore.removeProductFromWishlist(product);
}
</script>

<template>
  <input
    type="image"
    src="/icons/close.svg"
    alt=""
    class="favoriteBtn"
    @click="removeFromWishlist(product)"
    v-if="wishlist"
  />
  <input
    type="image"
    :src="
      state.wishlisted ? '/icons/like-filled.svg' : '/icons/like-outline.svg'
    "
    alt=""
    class="favoriteBtn"
    @click="addToWishlist(product)"
    v-else
  />
</template>
