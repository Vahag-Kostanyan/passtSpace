import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-PFrJoM6e69pz8fR1mFUGmA8m-ja8ZbA",
  authDomain: "passtspace.firebaseapp.com",
  projectId: "passtspace",
  storageBucket: "passtspace.appspot.com",
  messagingSenderId: "297741052660",
  appId: "1:297741052660:web:54886e8523c8e627564ca1",
  measurementId: "G-T314BNGSQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);