// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl7BeE4719B9m0yABsKmfwhWMCZH7vo4o",
  authDomain: "area-finder-60c7b.firebaseapp.com",
  projectId: "area-finder-60c7b",
  storageBucket: "area-finder-60c7b.appspot.com",
  messagingSenderId: "610771421224",
  appId: "1:610771421224:web:1971d16ce6a8968f8d0d1d",
  measurementId: "G-NTPZGT2EPC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);