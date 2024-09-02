// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuTMUSu0lxJKOqLhdOFRUBrplzlW3Q6_Y",
  authDomain: "contact-app-483fc.firebaseapp.com",
  projectId: "contact-app-483fc",
  storageBucket: "contact-app-483fc.appspot.com",
  messagingSenderId: "756165052220",
  appId: "1:756165052220:web:f7b6cd5c3eb7631f0d4039",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);