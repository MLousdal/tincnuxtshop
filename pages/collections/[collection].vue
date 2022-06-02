<template>
  <section class="oversigt">
    <div v-if="collection">
      <Html>
        <Head>
          <Title>{{ collection?.title ?? "" }}</Title>
          <Meta name="description" :content="collection?.description ?? ''" />
        </Head>
      </Html>
      <div>
        <Breadcrumbs></Breadcrumbs>
        <!-- <CategorySlider :categories="categories"></CategorySlider> -->
      </div>
      <div v-if="collection?.products?.edges">
        <ProductGrid>
          <ProductCard
            v-for="(product, index) in collection?.products?.edges"
            :index="index"
            :key="product.node.id"
            :product="product.node"
          />
        </ProductGrid>
      </div>
      <div v-else></div>
    </div>
    <div v-else></div>
    <div v-if="error">Error</div>
  </section>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { collectionByHandle } from "~/apollo/queries/collectionByHandle";
import { Links } from "~/constants";

const route = useRoute();
const handle = route.params.collection;

const { result, error } = useQuery(collectionByHandle, {
  handle,
  numProducts: 48,
});
const collection = useResult(result, null, (data) => data.collectionByHandle);

// const categories = Links.find((link) => link.title === handle);
// console.log(Links.find((link) => link.title == route.params.collection));
</script>
