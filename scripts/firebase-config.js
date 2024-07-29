// scripts/firebase-config.js

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYQQWy9Ru6k4tYKmbCYBwU2096m1k2YcQ",
  authDomain: "portfolio-site-e46a4.firebaseapp.com",
  projectId: "portfolio-site-e46a4",
  storageBucket: "portfolio-site-e46a4.appspot.com",
  messagingSenderId: "452060596256",
  appId: "1:452060596256:web:6ca225b6adff1e344ad445",
  measurementId: "G-V6V7Z9HLWQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
