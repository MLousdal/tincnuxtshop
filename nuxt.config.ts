import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  publicRuntimeConfig: {
    SHOPIFY_STOREFRONT_ENDPOINT: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  build: {
    transpile: ["@apollo/client", "@vue/apollo-composable"],
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/scss/main.scss"],

  head: {
    titleTemplate:
      "%s | TINC Økologisk Butik med Bæredygtige & Miljøvenlige Produkter",
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://tinc-mmd-4.vercel.app/",
      },
    ],
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
  },
});
