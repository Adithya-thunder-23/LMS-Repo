import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./assets/login.css";
import "./assets/signup.css";
import "./assets/Forgotpass.css";
import "./assets/landing.css"; 
import "./assets/global.css";

const app = createApp(App);
app.use(router);
app.mount('#app');

