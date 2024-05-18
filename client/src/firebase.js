// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-da700.firebaseapp.com",
  projectId: "blog-da700",
  storageBucket: "blog-da700.appspot.com",
  messagingSenderId: "1083125437726",
  appId: "1:1083125437726:web:814333817c16ba03fba50f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);