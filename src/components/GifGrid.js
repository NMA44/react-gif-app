import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "./helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
