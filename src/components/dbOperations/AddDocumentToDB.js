import { db } from "../../firebase-config";
import {collection,addDoc} from "firebase/firestore";

const AddDocumentToDB = async (collectionName, document) => {
  const collectionRef = collection(db, collectionName);
  await addDoc(collectionRef, document);
}

export {AddDocumentToDB};