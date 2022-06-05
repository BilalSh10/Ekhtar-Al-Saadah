import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEx3Z84OiJrzqsTIyKo2XCma5i_AWZaKc",
  authDomain: "react-test-b798f.firebaseapp.com",
  databaseURL: "https://react-test-b798f-default-rtdb.firebaseio.com",
  projectId: "react-test-b798f",
  storageBucket: "react-test-b798f.appspot.com",
  messagingSenderId: "346586223164",
  appId: "1:346586223164:web:bc1512d3ca2b9fbb1c6939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);