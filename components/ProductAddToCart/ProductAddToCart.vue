<template>
  <input
    type="image"
    src="/icons/addCart.svg"
    class="addToCartBtn"
    @click="addToCart"
    @keyup.enter="addToCart"
    :disabled="!product.availableForSale"
    v-if="small"
  />
  <button
    @click="addToCart"
    @keyup.enter="addToCart"
    v-else
    :class="{ 'background-error': !product.availableForSale }"
    :disabled="!product.availableForSale"
  >
    <span v-if="!product.availableForSale">Udsolgt</span>
    <span v-else>Tilføj til kurv</span>
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
