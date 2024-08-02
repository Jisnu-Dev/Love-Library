import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'; // Import necessary Firebase modules

const firebaseConfig = {
    apiKey: "AIzaSyCbsAe2nYAiUFtnP-6vhrTZrqcBICvUfdw",
    authDomain: "lovelibrary-806a1.firebaseapp.com",
    projectId: "lovelibrary-806a1",
    storageBucket: "lovelibrary-806a1.appspot.com",
    messagingSenderId: "939552676793",
    appId: "1:939552676793:web:adcc432e665964f6b3f468",
    measurementId: "G-P8KMQTEDVH"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Initialize auth from firebaseApp

const fbAuthProvider = new FacebookAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();

export { firebaseApp, auth, fbAuthProvider, googleAuthProvider };

export const FacebookAuth = async () => {
  try {
    const result = await signInWithPopup(auth, fbAuthProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const GoogleAuth = async () => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
};
