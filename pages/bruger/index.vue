<script setup>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useWishlistStore } from "~/stores/wishlist";

const wishlistStore = useWishlistStore();
const wishlistProducts = computed(() => wishlistStore.wishlist);
const router = useRouter();
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
function logout() {
  signOut(auth)
    .then(() => router.push("/"))
    .catch((error) => console.log(error));
}
</script>

<template>
  <div class="profile" v-if="state.user">
    <Html>
      <Head>
        <Title>
          Profil | TINC Økologisk Butik med Bæredygtige & Miljøvenlige Produkter
        </Title>
      </Head>
    </Html>
    <header>
      <h1 class="text-brand">{{ state.user.displayName }}'s profil</h1>
    </header>
    <section class="profile-section">
      <div class="left">
        <nav>
          <NuxtLink to="/bruger"
            >Alle ordre <img src="/icons/arrow.svg" alt=""
          /></NuxtLink>
          <NuxtLink to="/bruger"
            >Returner vare <img src="/icons/arrow.svg" alt=""
          /></NuxtLink>
          <NuxtLink to="/bruger"
            >Dine oplysninger <img src="/icons/arrow.svg" alt=""
          /></NuxtLink>
          <NuxtLink to="/bruger"
            >Hjælp og kontakt <img src="/icons/arrow.svg" alt=""
          /></NuxtLink>
        </nav>
        <button class="outline" @click="logout">Log ud</button>
      </div>
      <div class="right">
        <section class="spotlight">
          <header>
            <h3>Seneste ordre (2 vare)</h3>
          </header>
          <p class="text-gray">Ordre nummer: 98123750</p>
          <p class="text-gray">
            Estimeret leverings dato: man, 9. maj - tor, 12. maj
          </p>
          <div class="flex flex-gap-2">
            <img
              src="https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1904071-sw_349x349_726bd6c4-f143-410c-9c7b-ac907de8a049.webp?v=1653985184"
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302284-sw_349x349_3fcf5431-69b9-4336-8901-d1b323c4ceb6.webp?v=1653985381"
              alt=""
            />
          </div>
          <NuxtLink
            to="/bruger"
            class="flex flex-gap-2 text-1 flex-align-center text-dark"
            >se flere detaljer
            <img src="/icons/arrow.svg" alt="" class="icon s"
          /></NuxtLink>
        </section>
        <hr />
        <section class="spotlight">
          <header>
            <h3>Ønskeliste</h3>
          </header>
          <div class="flex flex-gap-2 wide">
            <img
              v-for="product in wishlistProducts"
              :src="product.images.edges[0].node.url"
              alt=""
            />
          </div>
          <NuxtLink
            to="/bruger/onskeliste"
            class="flex flex-gap-2 text-1 flex-align-center text-dark"
            >se hele ønskeliste
            <img src="/icons/arrow.svg" alt="" class="icon s"
          /></NuxtLink>
        </section>
      </div>
    </section>
  </div>
  <div v-else class="profile">
    <h1>Ingen bruger fundet</h1>
    <p>Gå til <NuxtLink to="/" class="bold">forsiden</NuxtLink></p>
  </div>
</template>
