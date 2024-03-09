import React, { useEffect, useState } from "react";
import imageApi from "../Apis/image.api";
import { useParams } from "react-router";
function ImageId() {
  const { id } = useParams();
  const [imageDeails, setImageDeatils] = useState({});

  useEffect(() => {
    const fetchImageDeatils = async () => {
      try {
        const response = await imageApi();
        const image = response[id - 1];
        if (image) {
          setImageDeatils(image);
        } else {
          console.error("Image not found");
        }
      } catch (error) {
        console.error("Error fetching image details:", error);
      }
    };
    fetchImageDeatils();
  }, [id]);

  return (
    <div className="w-full min-h-screen md:flex justify-around">
      <div className="md:w-[100%] h-[50%] m-5 md:flex gap-5 bg-blue-600 rounded-3xl">
        <img
          src={imageDeails.src}
          alt={`Image ${id}`}
          className="w-[50%] h-auto bg-cover rounded-3xl max-lg:w-[100%]"
        />
        <p className="md:w-[30%] sm:w-[100%] h-full text-white p-5 rounded text-justify font-serif font-bold">
          {imageDeails.title}
        </p>
        <p className="md:w-[40%] sm:w-[100%] h-full text-white p-5 rounded text-justify font-serif ">
          {imageDeails.description}
        </p>
      </div>
    </div>
  );
}

export default ImageId;
