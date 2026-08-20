// Shared Firebase initialization for the site
export const config = {
  apiKey: "AIzaSyARAZ2vUw6WdA0EL19_3W59DQaDJodCFXg",
  authDomain: "pixy-95e32.firebaseapp.com",
  databaseURL: "https://pixy-95e32-default-rtdb.firebaseio.com",
  projectId: "pixy-95e32",
  storageBucket: "pixy-95e32.firebasestorage.app",
  messagingSenderId: "322572995764",
  appId: "1:322572995764:web:7121c68901faee7ec7dbe1",
  measurementId: "G-0VM7HSG6GQ"
};



import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-storage.js";

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);