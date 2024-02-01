import React, { useEffect, useRef, useState } from "react";

import "./upload.css";

import InputComponent from "../../components/inputs/InputComponent";
import TextInputComponent from "../../components/inputs/TextInputComponent";
import ButtonComponent from "../../components/button/ButtonComponent";
import { collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import uploadPhoto from "../../services/uploadPhoto";
import { useContext } from "react";
import { AppStore } from "../../App Context/AppContext";
import UploadAnimation from "../../components/UploadAnimation/UploadAnimation";

function UploadPage() {
  const [loading, setLoading] = useState(false);
  const photpPickerRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const collectionRef = collection(db, "images");

  const handleImagePick = () => {
    photpPickerRef.current.click();
  };
  const handleImageChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    try {
      if (loading) {
        return;
      }
      setLoading(true);
      await uploadPhoto({
        photo: photo,
        title: title,
        description: description,
        collectionRef: collectionRef,
      });
      setPhoto(null);
      setTitle(null);
      setDescription(null);
      setDescription(null);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  };

  return (
    <>
      {/* Loading  View*/}
      {loading && <UploadAnimation />}

      {/* Photo Upload Container */}
      <form className="upload-container" onSubmit={handleImageUpload}>
        {/* Photo Picker / Add Section */}
        <div className="photo-picker" onClick={handleImagePick}>
          {photo != null ? (
            <div className="photo-view-container">
              {/* Picked Photo */}
              <img src={URL.createObjectURL(photo)} className="photo-viewers" />
              {/* change Photot */}
              <div className="photo-picker-title">Change</div>
            </div>
          ) : (
            <>
              <div className="photo-picker-title">Browse Files</div>
            </>
          )}

          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={photpPickerRef}
            onChange={handleImageChange}
          />
        </div>
        {/*  Title, Description  and Upload Button */}
        <div className="details">
          {/* Title */}
          <InputComponent
            title={"Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type={"text"}
          />

          {/* Description */}
          <TextInputComponent
            title={"Description"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type={"number"}
            style={{
              width: "90%",
              fontSize: "18px",
              padding: "8px",
              border: "1px solid lightblue",
              borderRadius: "20px",
            }}
          />
          {/* Upload Button */}
          <ButtonComponent title={"upload"} type={"submit"} />
        </div>
      </form>
    </>
  );
}

export default UploadPage;
