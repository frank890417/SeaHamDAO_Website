import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Navbar from "./components/Navbar";
import "animate.css/animate.min.css";

// import fontawesome from "@fortawesome/fontawesome-free";
import '@fortawesome/fontawesome-free/js/all.js';
// import "bootstrap";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdyN8tyOD2wRdTkx5CxMHCEMDcV9jTx2c",
  authDomain: "seahamdao.firebaseapp.com",
  databaseURL: "https://seahamdao-default-rtdb.firebaseio.com",
  projectId: "seahamdao",
  storageBucket: "seahamdao.appspot.com",
  messagingSenderId: "957099147702",
  appId: "1:957099147702:web:343dd5f19f9d06f0a34117",
  measurementId: "G-P3D100J29L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


let vueApp = createApp(App)
vueApp.component('Navbar',Navbar)
vueApp.use(store).use(router).mount("#app");