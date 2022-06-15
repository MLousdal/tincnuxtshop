<template>
  <div class="loginModal">
    <div class="flex flex-between">
      <p class="text-5 text-serif bold">Login</p>
      <input
        type="image"
        src="/icons/close.svg"
        alt=""
        @click="$emit('closeModal')"
      />
    </div>
    <form action="">
      <label for="LoginEmail"
        >Email:
        <input
          type="email"
          placeholder="Email.."
          id="LoginEmail"
          v-model="loginData.email"
          required
        />
      </label>
      <label for="LoginPassword"
        >Password:
        <input
          type="password"
          placeholder="********"
          id="LoginPassword"
          v-model="loginData.password"
          required
        />
      </label>
      <input type="submit" @click.prevent="login(loginData)" />
    </form>
    <hr />
    <button @click="facebookLogin">Login with Facebook</button>
  </div>
</template>

<script setup>
import {
  getAuth,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
const emit = defineEmits(["closeModal"]);
const provider = new FacebookAuthProvider();

const loginData = ref({
  password: "",
  email: "",
});

function facebookLogin() {
  const auth = getAuth();
  signInWithRedirect(auth, provider);
}

function login(payload) {
  if (Object.values(payload).some((pl) => pl === "")) {
    console.error("invalid input");
    return;
  }

  const auth = getAuth();
  signInWithEmailAndPassword(auth, payload.email, payload.password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
  emit("closeModal");
}
</script>
