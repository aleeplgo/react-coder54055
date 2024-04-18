// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYPJ6CPIWwSPs-hMDdEHX5v-ongircjrg",
  authDomain: "react-coder54055.firebaseapp.com",
  projectId: "react-coder54055",
  storageBucket: "react-coder54055.appspot.com",
  messagingSenderId: "700988012706",
  appId: "1:700988012706:web:00a8a31b37a29c719efffb",
  measurementId: "G-KXRLRESCFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("----Prueba db---");
console.log(db);
export { db }; // exporta la instancia de Firestore
