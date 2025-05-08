// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDt3gzIjDLWWOCAICUr-7rqxF8Ywhvr0K0",
  authDomain: "mentor-hub-bc1ca.firebaseapp.com",
  projectId: "mentor-hub-bc1ca",
  storageBucket: "mentor-hub-bc1ca.firebasestorage.app",
  messagingSenderId: "133676886128",
  appId: "1:133676886128:web:2888a33e68fc269a206cb5",
  measurementId: "G-K9N0GWQGTZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);