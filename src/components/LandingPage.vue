<script setup lang="ts">
import { ref, onMounted } from "vue";
import "../assets/landing.css";

const glowBox = ref(null)
const isVisible = ref(false)
const activeDropdown = ref<string | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.5 }
  )

  if (glowBox.value) {
    observer.observe(glowBox.value)
  }
})

const toggleDropdown = (menu: string) => {
  activeDropdown.value = activeDropdown.value === menu ? null : menu;
};

const closeDropdown = (event: MouseEvent) => {
  if (!(event.target as HTMLElement).closest(".nav-item")) {
    activeDropdown.value = null;
  }
};

onMounted(() => {
  const container = document.querySelector(".scroll-container");
  container?.scrollTo({ left: 0, behavior: "instant" });
});

document.addEventListener("click", closeDropdown);

onMounted(() => {
  const container = document.querySelector(".scroll-container");
  container?.scrollTo({ left: 0, behavior: "instant" });

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") activeDropdown.value = null;
  };

  document.addEventListener("keydown", handleEscape);
  document.addEventListener("click", closeDropdown);
});
</script>

<template>
  <div class="landing-page">
    <!-- Navbar -->
    <nav class="navbar">
      <RouterLink to="/dashboard">
        <h2 class="navbar-title">EduSync</h2>
      </RouterLink>
      <ul class="nav-links">
        <li class="nav-item" @click.stop="toggleDropdown('courses')">
          <a href="#">Courses</a>
          <svg class="caret" :class="{ open: activeDropdown === 'courses' }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'courses' }">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Data Science</a></li>
            <li><a href="#">Machine Learning</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('analytics')">
          <a href="#">Analytics</a>
          <svg class="caret" :class="{ open: activeDropdown === 'analytics' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'analytics' }">
            <li><a href="#">Reports</a></li>
            <li><a href="#">Trends</a></li>
            <li><a href="#">Performance</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('enrolled')">
          <a href="#">Enrolled Courses</a>
          <svg class="caret" :class="{ open: activeDropdown === 'enrolled' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'enrolled' }">
            <li><a href="#">My Courses</a></li>
            <li><a href="#">Progress</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('lab')">
          <a href="#">Lab</a>
          <svg class="caret" :class="{ open: activeDropdown === 'lab' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'lab' }">
            <li><a href="#">Practice Problems</a></li>
            <li><a href="#">Code Challenges</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('certificates')">
          <a href="#">Certificates</a>
          <svg class="caret" :class="{ open: activeDropdown === 'certificates' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'certificates' }">
            <li><a href="#">Earned Certificates</a></li>
            <li><a href="#">Upcoming Certifications</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('profile')">
          <a href="#">Profile</a>
          <svg class="caret" :class="{ open: activeDropdown === 'profile' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'profile' }">
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>

    <main class="content">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-inner">
          <h2 class="welcome-title">Welcome to EduSync - A Learning Management System</h2>
          <p class="description">
            Welcome to EduSync - A Learning Management System of EduSync — a dynamic digital platform designed to transform the educational experience for students, adult learners, instructors, and faculty members. 
          </p>
          <p class="description">
            Built with a focus on flexibility, academic rigor, and user-friendliness, this LMS provides a centralized space for course delivery, student engagement, assessments, and certification.
          </p>
          <p class="description">
            Whether you are beginning your academic journey or facilitating the learning of others, this platform is your trusted companion in the pursuit of knowledge and professional growth. 
          </p>
          <div class="cta-buttons">
            <RouterLink to="/about">
              <button class="primary-btn">About the Platform</button>
            </RouterLink>
            <RouterLink to="/why-choose">
              <button class="secondary-btn">Why Choose this LMS ?</button>
            </RouterLink>
          </div>
        </div>
      </section>
      <section class="contact-section">
          <div ref="glowBox" :class="['glow-box', { 'glow-on-scroll': isVisible }]">
            <h2>Contact Us</h2>
            <form class="contact-form">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
              <input type="tel" placeholder="Your phone number" required />
              <textarea placeholder="Your message..." rows="4" required></textarea>
              <button type="submit" class="glow-button">Send Message</button>
            </form>
          </div>
        </section>
    </main>
  </div>
</template>
