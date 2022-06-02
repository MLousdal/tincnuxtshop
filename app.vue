<template>
  <Header />
  <Cart />
  <main class="wrapper app">
    <NuxtPage />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import { useShopStore } from "~/stores/shop";

useMeta({
  htmlAttrs: {
    lang: "da",
  },
});

// Global Store Actions
const { pending, error } = await useAsyncData("shop", () => {
  const shopStore = useShopStore();
  return shopStore.getShopGlobals();
});

const config = useRuntimeConfig();
</script>
