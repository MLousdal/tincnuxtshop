<script setup>
useHead({
  title: "Bruger",
});
</script>

<template>
  <div class="profile">
    <header>
      <h1 class="text-brand">Profil</h1>
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
        <button class="outline">Log ud</button>
      </div>
      <div class="right">
        <section class="spotlight">
          <header>
            <h3>Seneste ordre (2 vare)</h3>
          </header>
          <p class="text-gray">Ordre nummer: XXXXXX</p>
          <p class="text-gray">
            Estimeret leverings dato: man, 9. maj - tor, 12. maj
          </p>
          <div class="flex flex-gap-2">
            <img src="/images/product.png" alt="" />
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
            <img src="/images/product.png" alt="" />
            <img src="/images/product.png" alt="" />
            <img src="/images/product.png" alt="" />
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
</template>
