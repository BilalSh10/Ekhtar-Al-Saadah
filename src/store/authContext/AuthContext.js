import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config.js";

const adminAuthContext = createContext();

export function AdminAuthContextProvider({children}) {
  const [adminAuth, setAdminAuth] = useState();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setAdminAuth(currentuser);
      if(currentuser){
        localStorage.setItem('loggedIn', JSON.stringify("true"))
      }else{
        localStorage.removeItem('loggedIn')
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <adminAuthContext.Provider value={{ adminAuth, logIn, logOut }} >
      {children}
    </adminAuthContext.Provider>
  );
}

export function useAdminAuthContext() {
  return useContext(adminAuthContext);
}