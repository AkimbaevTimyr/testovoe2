// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfxcolQBygqhDeIZTNMBmf0gs_teM6ZeI",
  authDomain: "testovoe-66e06.firebaseapp.com",
  projectId: "testovoe-66e06",
  storageBucket: "testovoe-66e06.appspot.com",
  messagingSenderId: "973099599476",
  appId: "1:973099599476:web:580ee5207bcfef4cf23321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get an authentication for authorization and registration
export const authentication = getAuth(app);