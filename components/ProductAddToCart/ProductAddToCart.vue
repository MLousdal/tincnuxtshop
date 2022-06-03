<template>
  <button
    @click="addToCart"
    @keyup.enter="addToCart"
    :disabled="!selectedVariantId"
  >
    <span>{{ currentLabel }}</span>
  </button>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/product";
import { useCartStore } from "~/stores/cart";

const productStore = useProductStore();
const cartStore = useCartStore();

const labelActive = "Tilføj til kurv";
const labelDisabled = "Vælg en variant";
const selectedVariantId = computed(() => productStore.selectedVariantId);
const currentLabel = computed(() =>
  selectedVariantId ? labelActive : labelDisabled
);

const addToCart = () => {
  if (!selectedVariantId.value) {
    // TO-DO: Handle unselected variant
    return;
  }
  cartStore.cartLinesAdd(selectedVariantId.value);
  productStore.setSelectedVariantId("");
};
</script>
