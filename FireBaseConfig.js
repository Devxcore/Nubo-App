// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX7lVwyikz6hkKwwdfmqqXCoNPse77Xmo",
  authDomain: "nubo-users.firebaseapp.com",
  projectId: "nubo-users",
  storageBucket: "nubo-users.appspot.com",
  messagingSenderId: "907393331800",
  appId: "1:907393331800:web:3bee1a3cd3922aff7fd02d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);