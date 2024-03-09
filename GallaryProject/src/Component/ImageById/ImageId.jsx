import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imageApi from "../Apis/image.api.js";

function ImageId() {
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState({});

  useEffect(() => {
    const fetchImageDetails = async () => {
      try {
        const response = await imageApi(); // Assuming your API function supports fetching all images
        const image = response[id - 1]; // Adjust index since it's 0-based

        if (image) {
          setImageDetails(image);
        } else {
          console.error("Image not found");
        }
      } catch (error) {
        console.error("Error fetching image details:", error);
      }
    };

    fetchImageDetails();
  }, [id]);

  return (
    <div className="w-full min-h-screen md:flex justify-around ">
      <div className="md:w-[100%] h-[50%] m-5 md:flex  gap-5 bg-blue-600 rounded-3xl">
        <img src={imageDetails.src} alt={`Image ${id}`} className="w-auto h-auto bg-cover rounded-3xl" />
        <p className="md:w-[30%] sm:w-[100%] h-full text-white p-5 rounded text-justify font-serif font-bold"><span className="font-bold">Title</span>: {imageDetails.title}</p>
        <p className="w-[30%] h-full sm:w-[100%] text-white p-5 text-justify font-serif"><span className="font-bold">Description</span>: {imageDetails.description}</p>
      </div>
    </div>
  );
}

export default ImageId;
