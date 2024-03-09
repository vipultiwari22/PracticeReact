import React, { useState, useEffect } from "react";
import imageApi from "../Apis/image.api.js";
import { Link } from "react-router-dom";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await imageApi();
        if (Array.isArray(response)) {
          setImages(response);
          console.log("respo", response);
        } else {
          console.error("Invalid data format:", response);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  let Prev = "";
  let Next = "";

  let buttons = (direction) => {
    if (direction === "Prev") {
      console.log("Prev");
    } else if (direction === "Next") {
      console.log("Next");
    }
  };

  return (
    <>
      <div className="md:w-full min-h-screen grid gap-5 p-5 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.length === 0 ? (
          <p className="w-full h-full text-center m-auto font-bold font-sans">
            Image Loading...
          </p>
        ) : (
          images.map((img, index) => (
            <Link key={index} to={`image/${index + 1}`}>
              <img
                src={img.src}
                alt={`Image ${index}`}
                className="w-full h-full object-cover rounded-2xl cursor-pointer"
              />
            </Link>
          ))
        )}
      </div>
      <div className="w-full h-auto text-white text-center rounded md:flex  justify-around items-center">
        <button
          className="w-[15%] m-5 h-7 bg-blue-400 rounded"
          onClick={() => {
            buttons("Prev");
          }}
        >
          Prev
        </button>
        <button
          className="w-[15%] m-5 h-7 bg-blue-400 rounded"
          onClick={() => {
            buttons("Next");
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Gallery;
