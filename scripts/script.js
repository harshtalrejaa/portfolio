// scripts/script.js

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

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Contact form submission
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Save form data to Firestore
        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert('Your message has been sent successfully!');
            contactForm.reset();
        }).catch((error) => {
            console.error('Error writing document: ', error);
            alert('There was an error sending your message. Please try again later.');
        });
    });
});
