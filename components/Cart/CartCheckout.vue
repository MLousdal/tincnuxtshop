<template>
  <a
    v-if="checkoutUrl"
    :href="checkoutUrl"
    class="btn text-light fit flex-align-self-end checkout"
    >Gå til kassen</a
  >
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();

const checkoutUrl = cartStore?.cart?.checkoutUrl;
</script>
