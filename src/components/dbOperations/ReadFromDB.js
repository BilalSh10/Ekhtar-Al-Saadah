import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function useReadFromDB(props) {
  const [array, setArray] = useState(null);  
  const collectionRef = collection(db, props);
  //const q = query(collectionRef, orderBy("priority", "desc"), limit(2));
  let q = collectionRef;
  if((props !== "reviews")&&(props !== "subscribers")){
    q = query(collectionRef, orderBy("time", "desc"));
  }
  
  useEffect(() => {
    try{
      const getArray = async () => {
        const data = await getDocs(q);
        setArray(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getArray();
    }catch(error){
      alert(error.message);
    }
  }, []);

  return array;
}

export {useReadFromDB};