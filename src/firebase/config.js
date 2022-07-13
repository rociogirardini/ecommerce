// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAADdFhAlF7qwNB0NSp0N_ZxsFwxh9Ey38",
  authDomain: "e-commerce-65a53.firebaseapp.com",
  projectId: "e-commerce-65a53",
  storageBucket: "e-commerce-65a53.appspot.com",
  messagingSenderId: "876743808322",
  appId: "1:876743808322:web:48789728907c643a8fe4db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
