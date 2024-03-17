// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmvmlz238pgAAByHjGWZ5g8fN0NMDCUfk",
  authDomain: "tienda-entrega-final-reac.firebaseapp.com",
  projectId: "tienda-entrega-final-reac",
  storageBucket: "tienda-entrega-final-reac.appspot.com",
  messagingSenderId: "971058117027",
  appId: "1:971058117027:web:2c6acfd03f4938cf110216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);