import { db } from "../../firebase-config";
import {deleteDoc, doc} from "firebase/firestore";

const DeleteDocumentFromDB = async (collectionName, docId) => {
  const docToDelete = doc(db, collectionName, docId);
  await deleteDoc(docToDelete);
}

export {DeleteDocumentFromDB};