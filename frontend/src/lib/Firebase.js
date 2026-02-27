import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_FIREBASE_MESSEGING_SENDER,
  appId: import.meta.env.REACT_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Helper for Google
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
