import React, { useContext, useEffect, useState } from "react";
import { AppStore } from "../../App Context/AppContext";
import { useParams } from "react-router-dom";
import handlePhotoDetails from "../../services/photoDetails";

import "./photos.css";

function PhotoDetails() {
  let params = useParams();
  const [photo, setPhoto] = useState({});
  const { loading, setLoading } = useContext(AppStore);

  useEffect(() => {
    setLoading(true);
    if (!params.id) {
      return;
    }
    try {
      handlePhotoDetails({ id: params.id })
        .then((response) => {
          setPhoto(response);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  }, [params.id]);

  return (
    <>
      {/* Main conatainer */}
      <div className={`main-container`}>
        {/* Photo Section */}
        <div className={`photo-container ${loading && "skeleton-loader"}`}>
          {loading && <div className="mobile-skeleton" />}

          <img src={photo?.imgUrl} />
        </div>

        {/* title And Description section */}
        <div className={`details-container ${loading && "skeleton-loader"}`}>
          {loading && <div className="mobile-skeleton" />}
          <h3>{photo.title}</h3>
          <p>{photo.description}</p>
        </div>
      </div>
    </>
  );
}

export default PhotoDetails;
