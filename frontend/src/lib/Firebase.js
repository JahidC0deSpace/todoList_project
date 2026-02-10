import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBri3_hnGTNoe2WJKH0N81NEZrnV5o1qsA",
  authDomain: "login-auth-ba7cb.firebaseapp.com",
  projectId: "login-auth-ba7cb",
  storageBucket: "login-auth-ba7cb.firebasestorage.app",
  messagingSenderId: "672488827226",
  appId: "1:672488827226:web:be065d1a0c497c84506b63",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Helper for Google
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
