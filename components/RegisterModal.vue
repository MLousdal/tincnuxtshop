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
    <form>
      <label
        for="RegisterName"
        :class="{ 'text-error': v$.name.$errors.length }"
        >Name:
        <input
          type="text"
          placeholder="Name.."
          id="RegisterName"
          v-model="registerData.name"
          @blur="v$.name.$touch"
        />
      </label>
      <label
        for="RegisterEmail"
        :class="{ 'text-error': v$.email.$errors.length }"
        >Email:
        <input
          type="email"
          placeholder="Email.."
          id="RegisterEmail"
          v-model="registerData.email"
          @blur="v$.email.$touch"
        />
      </label>
      <label
        for="RegisterPassword"
        :class="{ 'text-error': v$.password.$errors.length }"
        >Password:
        <input
          type="password"
          placeholder="********"
          id="RegisterPassword"
          v-model="registerData.password"
          @blur="v$.password.$touch"
        />
      </label>
      <div v-if="v$.$errors.length">
        <hr />
        <p class="text-4 text-serif bold text-error">Errors:</p>
        <div
          class="input-errors"
          v-for="error of v$.name.$errors"
          :key="error.$uid"
        >
          <div class="error-msg text-error">Name: {{ error.$message }}</div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
          <div class="error-msg text-error">Email: {{ error.$message }}</div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
          <div class="error-msg text-error">Password: {{ error.$message }}</div>
        </div>
      </div>
      <input
        type="submit"
        @click.prevent="register(registerData)"
        :disabled="Object.values(registerData).some((pl) => pl === '')"
      />
    </form>
  </div>
</template>

<script setup>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const emit = defineEmits(["closeModal"]);

const registerData = ref({
  name: "",
  password: "",
  email: "",
});
const rules = {
  name: { required },
  password: { required, minLengthValue: minLength(6) },
  email: { required, email },
};

const v$ = useVuelidate(rules, registerData);

function register(payload) {
  if (Object.values(payload).some((pl) => pl === "") || v$.value.$error) return;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, payload.email, payload.password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: payload.name,
      })
        .then(() => {})
        .catch((error) => {});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
  emit("closeModal");
}
</script>
