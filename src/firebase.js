// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import Firebase Auth module if you're using it

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbsAe2nYAiUFtnP-6vhrTZrqcBICvUfdw",
    authDomain: "lovelibrary-806a1.firebaseapp.com",
    projectId: "lovelibrary-806a1",
    storageBucket: "lovelibrary-806a1.appspot.com",
    messagingSenderId: "939552676793",
    appId: "1:939552676793:web:adcc432e665964f6b3f468",
    measurementId: "G-P8KMQTEDVH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export the Firebase app for use in other files
export default firebaseApp;
