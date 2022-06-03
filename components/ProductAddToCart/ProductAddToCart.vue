<template>
  <input
    type="image"
    src="/icons/addCart.svg"
    class="addToCartBtn"
    @click="addToCart"
    @keyup.enter="addToCart"
    :disabled="!selectedVariantId"
    v-if="small"
  />
  <button
    @click="addToCart"
    @keyup.enter="addToCart"
    :disabled="!selectedVariantId"
    v-else
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

const props = defineProps({
  product: { type: Object, required: false },
  small: { type: Boolean, required: false, default: false },
});

const addToCart = () => {
  if (!selectedVariantId.value) {
    // TO-DO: Handle unselected variant
    return;
  }
  cartStore.cartLinesAdd(selectedVariantId.value);
  productStore.setSelectedVariantId("");
};
</script>
