import axios from "axios";

const URL = `https://api.slingacademy.com/v1/sample-data/photos?&limit=20`;

async function imageApi() {
  try {
    const response = await axios.get(URL);
    const imageData = response.data.photos.map((photo) => ({
      id: photo.id,
      title: photo.title,
      src: photo.url,
      description: photo.description,

      // Add other image properties if needed
    }));
    console.log(response.data);
    return imageData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default imageApi;
