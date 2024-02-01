// services/photoUploadService.js
import axios from "axios";
import { addDoc, serverTimestamp } from "firebase/firestore";

const uploadPhoto = async ({ photo, title, description, collectionRef }) => {
  try {
    if (!photo) {
      throw new Error("Please select a photo");
    }

    if (!title) {
      throw new Error("Please add photo title");
    }

    if (!description) {
      throw new Error("Please add photo description");
    }

    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", process.env.UPLOAD_PRESET);
    data.append("cloud_name", process.env.CLOUD_NAME);

    const imgUploadResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
      data
    );

    const response = await addDoc(collectionRef, {
      title,
      description,
      imgUrl: imgUploadResponse.data.url,
      timestamp: serverTimestamp(),
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default uploadPhoto;
