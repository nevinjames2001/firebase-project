import { createApp,defineAsyncComponent } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const Title=defineAsyncComponent(()=>import(/*webpackchunkName:"title"*/'@/components/atoms/Title.vue' ))
import './assets/tailwind.css'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Your web app's Firebase configuration
initializeApp({
  apiKey: "AIzaSyC-XAcyj7rWJ2tex2LUuDtWJ2cyzrpja2k",
  authDomain: "fir-project-b18cd.firebaseapp.com",
  projectId: "fir-project-b18cd",
  storageBucket: "fir-project-b18cd.appspot.com",
  messagingSenderId: "1057902262216",
  appId: "1:1057902262216:web:51c068ec8d77571f2472fd"
});

createApp(App).use(store).use(router).component('Title',Title).mount('#app')
