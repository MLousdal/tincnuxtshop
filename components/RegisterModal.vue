<template>
  <div class="loginModal">
    <div class="flex flex-between">
      <p class="text-5 text-serif bold">Register</p>
      <input
        type="image"
        src="/icons/close.svg"
        alt=""
        @click="$emit('closeModal')"
      />
    </div>
    <form action="">
      <label for="RegisterName"
        >Name:
        <input
          type="text"
          placeholder="Name.."
          id="RegisterName"
          v-model="registerData.name"
          required
        />
      </label>
      <label for="RegisterEmail"
        >Email:
        <input
          type="email"
          placeholder="Email.."
          id="RegisterEmail"
          v-model="registerData.email"
          required
        />
      </label>
      <label for="RegisterPassword"
        >Password:
        <input
          type="password"
          placeholder="********"
          id="RegisterPassword"
          v-model="registerData.password"
          required
        />
      </label>
      <input type="submit" @click.prevent="register(registerData)" />
    </form>
  </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const emit = defineEmits(["closeModal"]);

const registerData = ref({
  name: "",
  password: "",
  email: "",
});

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
      console.error(errorCode, errorMessage);
    });
  emit("closeModal");
}
</script>
