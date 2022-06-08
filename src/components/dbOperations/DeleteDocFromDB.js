import { db } from "../../firebase-config";
import {collection,deleteDoc, doc} from "firebase/firestore";

function DeleteDocumentFromDB(collectionName) = (id) => {
  const docToDelete = doc(db, collectionName, id);
  await deleteDoc(docToDelete);
}

export {DeleteDocumentFromDB};