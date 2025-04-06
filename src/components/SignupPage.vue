<template>
  <div class="signup-page">
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignup">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" placeholder="Enter your username" required />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="Enter your email" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          v-model="password" 
          placeholder="Enter your password" 
          @focus="showHint = true" 
          @blur="showHint = false"
          required 
        />
        <div class="password-hint" v-if="showHint">
          Password must be at least 8 characters long, and include at least one uppercase letter, 
          one lowercase letter, one number, and one special character.
        </div>
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
      </div>
      <button type="submit" class="signup-button">Sign Up</button>
    </form>
    <p id="message" v-if="message">{{ message }}</p>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const email = ref("");
const password = ref("");
const message = ref("");
const passwordError = ref("");
const showHint = ref(false);
const router = useRouter();

const handleSignup = () => {
  if (!validatePassword(password.value)) {
    passwordError.value = "Password does not meet the requirements.";
    return;
  }
  passwordError.value = "";
  message.value = "Signup successful!";
  setTimeout(() => {
    router.push("/");
  }, 1000);
};

const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};
</script>

<style src="../assets/signup.css"></style>
