<template>
  <Html>
    <Head>
      <Meta
        name="description"
        content="Hos TINC forhandler vi et kæmpe udvalg af Økologiske, Bæredygtige & Naturlige produkter til Dig & din Famillie. TINC.SHOP gør det let og simpelt at købe mere naturlige produkter."
      />
    </Head>
  </Html>
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

  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content:
        "Hos TINC forhandler vi et kæmpe udvalg af Økologiske, Bæredygtige & Naturlige produkter til Dig & din Famillie. TINC.SHOP gør det let og simpelt at købe mere naturlige produkter.",
    },
    {
      hid: "og:title",
      property: "og:title",
      content:
        "Forside | TINC Økologisk Butik med Bæredygtige & Miljøvenlige Produkter",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Hos TINC forhandler vi et kæmpe udvalg af Økologiske, Bæredygtige & Naturlige produkter til Dig & din Famillie. TINC.SHOP gør det let og simpelt at købe mere naturlige produkter.",
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "website",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://tinc-mmd-4.vercel.app/images/diana-light.jpg",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://tinc-mmd-4.vercel.app/",
    },
  ],
});

// Global Store Actions
const { pending, error } = await useAsyncData("shop", () => {
  const shopStore = useShopStore();
  return shopStore.getShopGlobals();
});

const config = useRuntimeConfig();
</script>
