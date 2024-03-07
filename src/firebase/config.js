// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb7HytUiRlMmwqGo18hkO7_rNtqjOsPmg",
  authDomain: "next-app-8d8b4.firebaseapp.com",
  projectId: "next-app-8d8b4",
  storageBucket: "next-app-8d8b4.appspot.com",
  messagingSenderId: "918463945539",
  appId: "1:918463945539:web:0f25b14c919a65a9dd6df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)