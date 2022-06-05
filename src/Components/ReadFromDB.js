import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {collection,getDocs} from "firebase/firestore";

function useReadFromDB(props) {
  const [array, setArray] = useState(null);  
  const collectionRef = collection(db, props);
  
  useEffect(() => {
//  try{
      const getArray = async () => {
      const data = await getDocs(collectionRef);
        setArray(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getArray();
//  }catch(error){
//  }
  }, [collectionRef]);

  return array;
}

export {useReadFromDB};