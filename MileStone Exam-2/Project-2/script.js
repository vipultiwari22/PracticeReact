let boxes = document.querySelectorAll(".boxes");
const url = "https://www.omdbapi.com/?s=movie&apikey=d9713940";
let search = document.querySelector('.search')
console.log(search);

let fetchMovie = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();


        // Check if response is successful
        if (data.Response === "True") {
            // Iterate over each movie item
            let movies = data.Search;
            console.log(data);

            boxes.forEach((ele, index) => {
                let img = ele.querySelector('img');
                let span = ele.querySelector('span');

                // Assuming the movies array has the same length as boxes array
                let movie = movies[index];

                img.src = movie.Poster;
                span.innerHTML = movie.Title;
            });
        } else {
            console.log("Error:", data.Error);
        }
    }
    catch (error) {
        console.log("Error fetching data:", error);
    }

    //  Serching movies we can this method also

    // search.addEventListener('input', async (e) => {
    //     e.preventDefault()
    //     const searchTerm = e.target.value.trim()
    //     if (searchTerm) {
    //         const searchUrl = `https://www.omdbapi.com/?s=${searchTerm}&apikey=d9713940`;
    //         try {
    //             const response = await fetch(searchUrl)
    //             const data = response.json()

    //             if (data.Response === 'True') {
    //                 let movie = data.Search;
    //                 console.log(movie);
    //             } else {
    //                 console.log("Error:", data.Error);
    //             }

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     else {
    //         console.log('please enter value to search');
    //     }
    // })
};

search.addEventListener('input', async (e) => {
    e.preventDefault();

    const searchTerm = e.target.value.trim();

    if (searchTerm) {
        const searchUrl = `https://www.omdbapi.com/?s=${searchTerm}&apikey=d9713940`;
        try {
            const response = await fetch(searchUrl);
            const data = await response.json();

            if (data.Response === "True") {
                let movies = data.Search;

                boxes.forEach((ele, index) => {
                    let img = ele.querySelector('img');
                    let span = ele.querySelector('span');

                    // Assuming the movies array has the same length as boxes array
                    let movie = movies[index];

                    img.src = movie.Poster;
                    span.innerHTML = movie.Title;
                });
            } else {
                console.log("Error:", data.Error);
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    } else {
        console.log("Please enter a search term");
    }
});

fetchMovie(url);
