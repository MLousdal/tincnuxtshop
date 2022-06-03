<template :key="handle">
  <section class="product-page-wrapper">
    <div
      v-if="product"
      class="grid grid-cols-1 mx-auto my-4 md:grid-cols-[auto_minmax(300px,_1fr)] md:gap-8 md:my-8"
    >
      <Html>
        <Head v-if="product?.title && product?.description">
          <Title>{{ product.title }}</Title>
          <Meta name="description" :content="product.description" />
        </Head>
      </Html>
      <Breadcrumbs />
      <section class="product-page">
        <ImageCarousel :images="product.images?.edges ?? ''"></ImageCarousel>
        <section>
          <header class="product-page-header">
            <h1>{{ product.title }}</h1>
            <div class="flex flex-between flex-align-center">
              <p class="text-5 bold text-serif">
                {{ product.priceRange.minVariantPrice.amount }} kr.
              </p>
              <div class="product-functions">
                <FavoriteBtn></FavoriteBtn>
                <button>Tilføj til kurv</button>
              </div>
            </div>
          </header>
          <main>
            <header>
              <h2>Beskrivelse</h2>
            </header>
            <div
              v-html="product.descriptionHtml"
              class="flex flex-column flex-gap-2"
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
      <!-- <ProductImage
        :alt="product.handle"
        :src="product.images?.edges[0]?.node?.url ?? ''"
        :width="product.images?.edges[0]?.node?.width ?? ''"
        :height="product.images?.edges[0]?.node?.height ?? ''"
        class=""
      />
      <div class="p-4 mt-4 border-2 border-black md:mt-0">
        <ProductTitle
          tag="h1"
          :title="product.title"
          variant="product"
          class="text-xl"
        />
        <ProductPrice
          :priceRange="product.priceRange"
          :compareAtPriceRange="product.compareAtPriceRange"
          class="mb-4 md:mb-8"
        />
        <ProductVariants label="Select option" :variants="variants" />
        <ProductAddToCart />
        <ProductDescription :description="product.descriptionHtml" /> 
      </div> -->
    </div>
    <div v-else></div>
    <div v-if="error">Error</div>
  </section>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { getSrcset } from "~/utils/images";
import { productByHandle } from "~/apollo/queries/productByHandle";
import { productVariantsByHandle } from "~/apollo/queries/productVariantsByHandle";
import Breadcrumbs from "~~/components/Breadcrumbs.vue";

const route = useRoute();
const handle = route.params.product;

// Get product data
let variants = ref(null);
const { result, error } = useQuery(productByHandle, { handle });
const product: any = useResult(result, null, (data) => data.productByHandle);
const initialVariants = useResult(
  result,
  [],
  (data) => data.productByHandle.variants.edges
);
variants.value = initialVariants;

// Product Image
const src = computed(() => product.value.images?.edges[0]?.node?.url ?? "");
const sizes = `(max-width: 300px) 95vw, 40vw`;
const srcset = computed(() => getSrcset(src.value || ""));

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
