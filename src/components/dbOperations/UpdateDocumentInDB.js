import { db } from "../../firebase-config";
import {updateDoc,doc} from "firebase/firestore";

async function UpdateDocumentInDB (collectionName, id, fieldName, newValue) {
  const document = doc(db, collectionName, id);
  await updateDoc(document, {"title":newValue});
};

export {UpdateDocumentInDB};