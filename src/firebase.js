import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'; // Import specific functions from auth module

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
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Initialize auth from firebaseApp

// Facebook Auth Provider
const fbAuthProvider = new FacebookAuthProvider();

// Export the Firebase app for use in other files
export default firebaseApp;

export const FacebookAuth = async () => {
  try {
    const result = await signInWithPopup(auth, fbAuthProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
};
