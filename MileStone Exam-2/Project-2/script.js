let boxes = document.querySelectorAll(".boxes");
let images = document.querySelectorAll("img");

images.forEach((img) => {
  let childElements = img.children;
  childElements.forEach((element) => {
    console.log(element.classList);
  });
});


let span = document.querySelectorAll("span");
let btns = document.querySelectorAll("button");
// console.log(boxes);
const url = "https://www.omdbapi.com/?s=movie&apikey=d9713940";

let fetchMovie = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if response is successful
    if (data.Response === "True") {
      // Iterate over each movie item
      console.log(data);
      data.Search.map((movie) => {
        // console.log(movie);
        // Here you can access individual properties of each movie
        // console.log("Title:", movie.Title);
        // console.log("Year:", movie.Year);
        // console.log("IMDB ID:", movie.imdbID);
        // console.log("Type:", movie.Type);
        // console.log("Poster:", movie.Poster);
        // image.forEach((img) => {
        //   let res = img.src;
        //   console.log(res);
        // });
      });
    } else {
      console.log("Error:", data.Error);
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

// fetchMovie(url);
