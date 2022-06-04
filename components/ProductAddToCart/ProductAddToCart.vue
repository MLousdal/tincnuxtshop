<template>
  <input
    type="image"
    src="/icons/addCart.svg"
    class="addToCartBtn"
    @click="addToCart"
    @keyup.enter="addToCart"
    v-if="small"
  />
  <button @click="addToCart" @keyup.enter="addToCart" v-else>
    <span>Tilføj til kurv</span>
  </button>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

const props = defineProps({
  product: { type: Object, required: false },
  small: { type: Boolean, required: false, default: false },
});

const addToCart = () => {
  cartStore.cartLinesAdd(props.product.variants.edges[0].node.id);
};
</script>
