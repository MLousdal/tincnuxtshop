<script setup>
const products = [
  {
    id: "gid://shopify/Product/7709201105131",
    handle: "denttabs-tandpastapiller-uden-fluor-pris-pr-gram",
    title: "Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    tags: ["Tandpleje"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "1.2" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/8206002-sw_1-sw_1000x1000_ba4634d5-b832-4744-be62-699457f3bdce.jpg?v=1653985983",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/8206002-3-sw_1_1-sw_1000x1000_14c10c39-c116-4100-9d3c-203b071dfcb5.jpg?v=1653985983",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/8206002-2-sw_1_1-sw_1000x1000_6dc3abcf-f662-40c1-85d6-696aba1ca2b6.jpg?v=1653985983",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Tandpleje" }],
    },
  },
  {
    id: "gid://shopify/Product/7709182230763",
    handle: "handskaret-handsaebe-slice-of-sunshine-110-g",
    title: "Håndskåret Håndsæbe Slice of Sunshine (110 g)",
    tags: [
      "Bad og sæbe",
      "Håndsæbe",
      "Kropspleje",
      "Personlig pleje",
      "Sæber og sæbeskåle",
    ],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "29.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302059-sw_349x349_1b0e7e99-f119-4680-9099-745976a2e528.webp?v=1653985449",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Bad og sæbe" }],
    },
  },
  {
    id: "gid://shopify/Product/7709179773163",
    handle: "handskaret-handsaebe-jasmine-green-tea-swivel-ca-110-g",
    title: "Håndskåret Håndsæbe Jasmine & Green Tea Swivel (ca 110 g)",
    tags: ["Bad og sæbe", "Håndsæbe", "Kropspleje", "Sæber og sæbeskåle"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "29.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302284-sw_349x349_3fcf5431-69b9-4336-8901-d1b323c4ceb6.webp?v=1653985381",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Bad og sæbe" }],
    },
  },
];

const tags = ["Tør/moden", "Fedet"];

const state = reactive({ desktop: true });

useHead({
  title: "Ønskeliste",
});
</script>

<template>
  <div class="onskeliste">
    <header>
      <h1 class="text-brand">Ønskeliste</h1>
    </header>
    <section>
      <div class="flex flex-between flex-align-center">
        <p class="text-gray" v-if="state.desktop">
          {{ products.length }} resultater
        </p>
        <Filter></Filter>
      </div>
      <div class="flex flex-gap-1">
        <Tag v-for="tag in tags" :filter="tag"></Tag>
      </div>
    </section>
    <ProductGrid :products="products"></ProductGrid>
    <hr />
    <section>
      <SectionHeader title="Sidst set" link="/Alle-produkter"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
  </div>
</template>
