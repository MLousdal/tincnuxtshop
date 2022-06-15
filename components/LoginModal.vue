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
    <form :class="{ 'text-error': state.error }">
      <p v-if="state.error">{{ state.error }}</p>
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
      <input
        type="submit"
        @click.prevent="login(loginData)"
        :disabled="Object.values(loginData).some((pl) => pl === '')"
      />
    </form>
    <hr />
    <button @click="facebookLogin" class="btn-fb">
      <div class="fb-content">
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            version="1"
          >
            <path
              fill="#FFFFFF"
              d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z"
            />
            <path
              fill="#4267b2"
              d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z"
            />
          </svg>
        </div>
        <p>Sign in with Facebook</p>
      </div>
    </button>
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

const state = ref({ error: null });

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
      emit("closeModal");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      state.value.error = error.message;
    });
}
</script>

<style lang="scss">
.btn-fb {
  all: unset;
  display: inline-block;
  border-radius: 1px;
  text-decoration: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
  padding-top: 1.5px;
  background: #4267b2;
  &:hover {
    box-shadow: 0 0 3px 3px rgba(#3b5998, 0.3);
    cursor: pointer;
  }
  &:active {
    background-color: #3b5998;
  }

  .fb-content {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 300px;
    height: 50px;
    .logo {
      padding: 15px;
      height: inherit;
    }
    svg {
      width: 18px;
      height: 18px;
    }
    p {
      width: 100%;
      line-height: 1;
      letter-spacing: 0.21px;
      text-align: center;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      color: rgba(white, 0.87);
    }
  }
}
</style>
