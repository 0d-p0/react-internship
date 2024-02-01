// services/photoUploadService.js

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const handlePhotoDetails = async ({ id }) => {
  try {
    console.log(id);
    const docRef = doc(db, "images", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export default handlePhotoDetails;
