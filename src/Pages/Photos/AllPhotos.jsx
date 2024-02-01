import React, { useContext } from "react";
import CardComponent from "../../components/cards/CardComponent";
import "./photos.css";
import PhotoAlbum from "react-photo-album";
import { AppStore } from "../../App Context/AppContext";
import { useNavigate } from "react-router-dom";
import SkeletonCard from "../../components/cards/SkeletonCard";
function AllPhotos() {
  const { allPhotos, loading, loadMore, hasMore } = useContext(AppStore);
  const navigate = useNavigate();
  const loaderArray = Array.from({ length: 10 });

  return (
    <div className="photos-container">
      {loading &&
        loaderArray.map((props, index) => <SkeletonCard key={index} />)}
      {allPhotos &&
        allPhotos.map((props) => (
          <div
            key={props.id}
            onClick={() => {
              navigate(`/photo-details/${props.id}`);
            }}
          >
            <CardComponent
              imageSrc={props.imgUrl}
              title={props.title}
              description={props.description}
            />
          </div>
        ))}

      {hasMore && (
        <div onClick={loadMore} className="photo-picker-title">
          load More
        </div>
      )}
    </div>
  );
}

export default AllPhotos;
