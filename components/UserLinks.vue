<template>
  <div class="user-links flex-align-center">
    <button
      class="user-links-text"
      @click="loginModuleToggle"
      v-if="!state.user"
    >
      login
    </button>
    <button
      class="user-links-text"
      @click="registerModuleToggle"
      v-if="!state.user"
    >
      register
    </button>
    <button class="user-links-text" @click="logout" v-if="state.user">
      logout
    </button>
    <NuxtLink
      to="/bruger"
      aria-label="Bruger"
      class="user-links-icon"
      v-if="state.user"
      ><img src="/icons/user.svg"
    /></NuxtLink>
    <NuxtLink
      to="/bruger/onskeliste"
      aria-label="Ønskeliste"
      class="user-links-icon"
      v-if="state.user"
      ><img src="/icons/heart.svg"
    /></NuxtLink>
    <NuxtLink to="/bruger/kurv" aria-label="Kurv" class="user-links-icon"
      ><img src="/icons/basket.svg"
    /></NuxtLink>
    <RegisterModal
      v-show="state.register"
      @close-modal="registerModuleToggle"
    />
    <LoginModal v-show="state.login" @close-modal="loginModuleToggle" />
  </div>
</template>

<script setup>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const state = ref({ user: null, login: false, register: false });

let auth;

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
    .then(() => {
      // Sign-out successful.
      console.log("logged out");
    })
    .catch((error) => {
      // An error happened.
    });
}

function registerModuleToggle() {
  state.value.register = !state.value.register;
  state.value.login = false;
}

function loginModuleToggle() {
  state.value.login = !state.value.login;
  state.value.register = false;
}
</script>
