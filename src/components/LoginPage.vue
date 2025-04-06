<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import "../assets/login.css"; // Ensure this path is correct

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = () => {
  if (!email.value || !password.value) {
    alert("Please enter both email and password.");
    return;
  }
  // Simulate login (replace with actual auth logic)
  alert(`Logging in as: ${email.value}`);
  router.push("/dashboard"); // Redirect after login
};
</script>

<template>
  <div class="login-page">  <!-- Ensuring correct background color -->
    <div class="main-content">
      <div class="left-section">
        <img src="/edusync1.png" alt="EduSync Logo" class="main-logo" />
      </div>
      <div class="right-section">
        <div class="login-container">
          <h2 class="login-title">Login</h2>
          <form @submit.prevent="handleLogin">
            <div class="input-group">
              <input type="email" v-model="email" placeholder="Enter your email" required />
            </div>
            <div class="input-group">
              <input type="password" v-model="password" placeholder="Enter your password" required />
            </div>
            <div class="forgot-password">
              <router-link to="/forgotpassword" class="nav-link">Forgot Password?</router-link>
            </div>
            <button type="submit" class="login-button">Login</button>
          </form>
          <button class="google-button">
            <img src="/GoogleIcon.png" alt="Google Icon" class="google-icon" />
            Login with Google
          </button>
          <div class="signup-link">
            Don't have an account?
            <router-link to="/signup" class="nav-link">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
