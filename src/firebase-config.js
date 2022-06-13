import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBIUCYDn6q5EbhsgsOu1inucB4fEaXs63w",
  authDomain: "teatro-3b394.firebaseapp.com",
  projectId: "teatro-3b394",
  storageBucket: "teatro-3b394.appspot.com",
  messagingSenderId: "811218177788",
  appId: "1:811218177788:web:eec314e1220dfff2005179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);