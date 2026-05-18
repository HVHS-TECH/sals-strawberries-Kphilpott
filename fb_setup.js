// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSqSxKmiT4wjlFwpHYYFMQxnJTvsuI3HA",
  authDomain: "sals-strawberries-keesphilpott.firebaseapp.com",
  databaseURL: "https://sals-strawberries-keesphilpott-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sals-strawberries-keesphilpott",
  storageBucket: "sals-strawberries-keesphilpott.firebasestorage.app",
  messagingSenderId: "725875346041",
  appId: "1:725875346041:web:7c5de39c0025dea457a2a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);