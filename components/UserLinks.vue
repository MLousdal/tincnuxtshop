<template>
  <div class="user-links flex-align-center">
    <input
      type="image"
      to="/bruger"
      aria-label="Bruger"
      class="user-links-icon"
      src="/icons/user.svg"
      @click="registerModuleToggle"
    />
    <input
      type="image"
      to="/bruger"
      aria-label="Bruger"
      class="user-links-icon"
      src="/icons/user.svg"
      @click="loginModuleToggle"
    />
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

    <div class="loginModal" v-show="registerModuleOpen">
      <h3>Register</h3>
      <form action="">
        <label for="Name"
          >Name:
          <input
            type="text"
            placeholder="Name.."
            id="Name"
            v-model="registerData.name"
            required
          />
        </label>
        <label for="Email"
          >Email:
          <input
            type="email"
            placeholder="Email.."
            id="Email"
            v-model="registerData.email"
            required
          />
        </label>
        <label for="Password"
          >Password:
          <input
            type="password"
            placeholder="********"
            id="Password"
            v-model="registerData.password"
            required
          />
        </label>
        <input type="submit" @click.prevent="register(registerData)" />
      </form>
    </div>
    <div class="loginModal" v-show="loginModalOpen">
      <h3>Login</h3>
      <form action="">
        <label for="Email"
          >Email:
          <input
            type="email"
            placeholder="Email.."
            id="Email"
            v-model="loginData.email"
            required
          />
        </label>
        <label for="Password"
          >Password:
          <input
            type="password"
            placeholder="********"
            id="Password"
            v-model="loginData.password"
            required
          />
        </label>
        <input type="submit" @click.prevent="login(loginData)" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const loginModalOpen = ref(false);
const registerModuleOpen = ref(false);

const registerData = ref({
  name: "",
  password: "",
  email: "",
});

const loginData = ref({
  name: "",
  password: "",
  email: "",
});

function registerModuleToggle() {
  registerModuleOpen.value = !registerModuleOpen.value;
  loginModalOpen.value = false;
}

function loginModuleToggle() {
  loginModalOpen.value = !loginModalOpen.value;
  registerModuleOpen.value = false;
}

function register(payload) {
  if (Object.values(payload).some((pl) => pl === "")) {
    console.error("invalid input");
    return;
  }
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, payload.email, payload.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

function login() {
  console.log("login");

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
</script>

<style lang="scss" scoped>
.loginModal {
  position: absolute;
  top: 5rem;
  right: 5rem;
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
  padding: var(--size-7);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  background-color: var(--surface-1);

  form {
    display: flex;
    flex-direction: column;
    gap: var(--size-3);
    align-items: stretch;

    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--size-3);
    }
  }
}
</style>
