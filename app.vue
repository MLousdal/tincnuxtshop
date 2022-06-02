<template>
  <!-- <Header /> -->
  <!-- <Navbar /> -->
  <Cart />
  <NuxtPage class="wrapper app" />
  <Footer />
</template>

<script lang="ts" setup>
import { useShopStore } from "~/stores/shop";

useMeta({
  htmlAttrs: {
    lang: "en",
  },
});

// Global Store Actions
const { pending, error } = await useAsyncData("shop", () => {
  const shopStore = useShopStore();
  return shopStore.getShopGlobals();
});

const config = useRuntimeConfig();
</script>
