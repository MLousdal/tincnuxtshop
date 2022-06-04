<template :key="handle">
  <section>
    <div v-if="product" class="product-page-wrapper">
      <Html>
        <Head v-if="product?.title && product?.description">
          <Title>{{
            `${product?.title} | TINC Økologisk Butik med Bæredygtige & Miljøvenlige
          Produkter` ?? ""
          }}</Title>
        </Head>
      </Html>
      <Breadcrumbs />
      <section class="product-page">
        <ImageCarousel :images="product.images?.edges ?? ''"></ImageCarousel>
        <section>
          <header class="product-page-header">
            <h1>{{ product.title }}</h1>
            <div class="flex flex-between flex-align-center">
              <ProductPrice
                :priceRange="product.priceRange"
                :compareAtPriceRange="product.compareAtPriceRange"
                class="text-5 bold text-serif"
              />
              <div class="product-functions">
                <ProductVariants label="Select option" :variants="variants" />
                <FavoriteBtn></FavoriteBtn>
                <ProductAddToCart />
              </div>
            </div>
          </header>
          <main>
            <header>
              <h2>Beskrivelse</h2>
            </header>
            <div
              v-html="product.descriptionHtml"
              class="flex flex-column flex-gap-1"
            ></div>
            <ul class="product-page-list">
              <li>Zero waste</li>
              <li>Vegansk / vegan</li>
            </ul>
            <div class="flex flex-align-center flex-gap-1">
              <img src="/images/svanemærke.png" alt="" class="icon-l" />
              <img src="/images/nøglehulmærke.png" alt="" class="icon-l" />
            </div>
            <div class="flex flex-between flex-align-center">
              <div class="flex flex-column flex-gap-2">
                <p>Anmeldelser (0)</p>
                <Stars :rating="0"></Stars>
              </div>
              <p class="flex flex-gap-1">
                <span class="text-nowrap">læs anmeldelser</span>
                <img src="/icons/arrow.svg" alt="" class="icon" />
              </p>
            </div>
          </main>
        </section>
      </section>
      <section>
        <SectionHeader title="Relaterede" to="/all"></SectionHeader>
        <ProductSlider :products="baseProducts.edges"></ProductSlider>
      </section>
      <hr />
      <section>
        <SectionHeader title="Sidst set" to="/all"></SectionHeader>
        <ProductSlider :products="baseProducts.edges"></ProductSlider>
      </section>
    </div>
    <div v-else>Loading</div>
    <div v-if="error">Error</div>
  </section>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { productByHandle } from "~/apollo/queries/productByHandle";
import { productVariantsByHandle } from "~/apollo/queries/productVariantsByHandle";
import { baseProducts } from "~/constants";

const route = useRoute();
const handle = route.params.product;

// Get product data
let variants = ref(null);
const { result, error } = useQuery(productByHandle, { handle });
const product: any = useResult(result, null, (data) => data.productByHandle);
const initialVariants = useResult(
  result,
  [],
  (data) => data.productByHandle.variants.edges.default
);
variants.value = initialVariants;

// Fetch fresh inventory on client
onMounted(() => {
  const { result: clientResult, onResult } = useQuery(
    productVariantsByHandle,
    { handle },
    { fetchPolicy: "network-only" }
  );
  const clientVariants = useResult(
    clientResult,
    [],
    (data) => data.productByHandle.variants.edges
  );
  variants.value = clientVariants;
});
</script>
