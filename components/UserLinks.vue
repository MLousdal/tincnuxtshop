<template>
  <div class="user-links">
    <NuxtLink to="/bruger" aria-label="Bruger" class="user-links-icon"
      ><img src="/icons/user.svg"
    /></NuxtLink>
    <NuxtLink
      to="/bruger/onskeliste"
      aria-label="Ønskeliste"
      class="user-links-icon"
      ><img src="/icons/heart.svg"
    /></NuxtLink>
    <NuxtLink to="/bruger/kurv" aria-label="Kurv" class="user-links-icon"
      ><img src="/icons/basket.svg"
    /></NuxtLink>
  </div>
</template>
