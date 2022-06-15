<script setup>
import { useWishlistStore } from "~/stores/wishlist";
import { useLastSeenStore } from "~/stores/lastSeen";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const wishlistStore = useWishlistStore();
const wishlistProducts = computed(() => wishlistStore.wishlist);

let auth;

const state = ref({ user: null });

onMounted(() => {
  auth = getAuth();
  state.value.user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      state.value.user = user;
    } else {
      state.value.user = null;
    }
  });
});

const lastSeenStore = useLastSeenStore();
const lastSeenProducts = computed(() => lastSeenStore.lastSeenProducts);
</script>

<template>
  <div class="onskeliste" v-if="state.user">
    <Html>
      <Head>
        <Title>
          Ønskeliste | TINC Økologisk Butik med Bæredygtige & Miljøvenlige
          Produkter
        </Title>
      </Head>
    </Html>
    <header>
      <h1 class="text-brand">{{ state.user.displayName }}'s ønskeliste</h1>
    </header>
    <ProductGrid>
      <ProductCard
        v-for="(product, index) in wishlistProducts"
        :index="index"
        :key="product.id"
        :product="product"
        wishlist
      />
    </ProductGrid>
    <hr />
    <section>
      <SectionHeader title="Sidst set" to="/all"></SectionHeader>
      <ProductSlider :products="lastSeenProducts" last-seen></ProductSlider>
    </section>
  </div>
  <div v-else class="onskeliste">
    <h1>Ingen bruger fundet</h1>
    <p>Gå til <NuxtLink to="/" class="bold">forsiden</NuxtLink></p>
  </div>
</template>
