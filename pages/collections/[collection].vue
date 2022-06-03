<template>
  <section>
    <section v-if="collection" class="oversigt">
      <Html>
        <Head>
          <Title>{{ collection?.title ?? "" }}</Title>
          <Meta name="description" :content="collection?.description ?? ''" />
        </Head>
      </Html>
      <Breadcrumbs />
      <CategorySlider :categories="categories"></CategorySlider>
      <section v-if="collection?.products?.edges">
        <div class="flex flex-between flex-align-center">
          <p class="text-gray">
            {{ collection?.products?.edges.length }} resultater
          </p>
          <Filter></Filter>
        </div>
        <div class="flex flex-gap-1">
          <Tag v-for="tag in tags" :filter="tag"></Tag>
        </div>
        <ProductGrid>
          <ProductCard
            v-for="(product, index) in collection?.products?.edges"
            :index="index"
            :key="product.node.id"
            :product="product.node"
          />
        </ProductGrid>
      </section>
      <section v-else></section>
    </section>
    <section v-else>Oh no...</section>
    <section v-if="error">Error</section>
  </section>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { collectionByHandle } from "~/apollo/queries/collectionByHandle";
import { navLinks, tags } from "~/constants";

const route = useRoute();
const handle = route.params.collection;

const { result, error } = useQuery(collectionByHandle, {
  handle,
  numProducts: 48,
});
const collection = useResult(result, null, (data) => data.collectionByHandle);

const categoryLinks = navLinks.find(
  (link) => link.path.split("/")[link.path.split("/").length - 1] == handle
);
const categories = categoryLinks.subMenus;
</script>
