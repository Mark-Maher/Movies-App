import { cardHoverIn ,cardHoverOut } from "./cardAnimations.js";
let results,
movies,
movieImage,
movieTitle,
movieOverView,
movieRelease,
stars;
export async function getMovie(term) {
    let movie = `https://api.themoviedb.org/3/${term}?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`;
    let myHttp = await fetch(`${movie}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
         results = Data.results;
        movies = new Map(Object.entries(results));
        display();
    }
}
export async function searchMovie(term) {
    let movie = `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`;
    let myHttp = await fetch(`${movie}`);
    if (myHttp.ok && 400 != myHttp.status) {
        let Data = await myHttp.json();
        results = Data.results;
        movies = new Map(Object.entries(results));
        display();
    }
}
export function display()
{
let imgPath = 'https://image.tmdb.org/t/p/w500';
let term = '';
    for(let [key,value] of movies)
    {
         conditions(value,imgPath);
         term += `
         <div class="col-lg-4 col-md-6 col-sm-12 animate__animated">
         <div class="item overflow-hidden position-relative">
             <div class="cardImage">
                 <img src="${movieImage}" class="img-fluid">
             </div>
             <div class="overlay overflow-hidden">
                 <h1 class="animate__animated title">${value[movieTitle]}</h1>    
                 <p class="animate__animated desc">${movieOverView}</p>
                 <p class="animate__animated date"><span class="fst-normal">Release Date<span> : ${movieRelease}</p>
                 <h3 class="rate animate__animated">${stars}</h3>
                 <h3 class="rate animate__animated vote">${value.vote_average.toFixed(1)}</h3>
             </div>
         </div>
     </div>
    `
         $('#hero .row').html(term);
         $('#hero .row div').addClass("animate__fadeIn");
         $('#hero .item ').mouseenter(cardHoverIn);
        $('#hero .item').mouseleave(cardHoverOut);
    }
}
function conditions(value,imgPath)
{
    checkMovieImage(value,imgPath);
    checkMovieTItle(value);
    checkMovieDesc(value);
    checkMovieDate(value);
    checkMovieVote(value);
}
function checkMovieImage(value,imgPath)
{
    if(value.poster_path == null && value.backdrop_path == null)
    {
        movieImage = `assets/images/default-movie.jpg`;
    }
    else if(value.poster_path == null)
    {
        movieImage = `${imgPath+value.backdrop_path}`;
    }
    else if(value.hasOwnProperty('poster_path'))
    {
        movieImage = `${imgPath+value.poster_path}`;
    }
}
function checkMovieTItle(value)
{
    if(value.hasOwnProperty('title'))
    {
        movieTitle = `title`;
    }
    else if(value.hasOwnProperty('name'))
    {
            movieTitle = `name`;
    }
}
function checkMovieDesc(value)
{
    if(value.overview.length > 300)
    {
        movieOverView = `${value.overview.slice(0,300)}...`;
    }
    else
    {
        movieOverView = `${value.overview}`;
    }
}
function checkMovieDate(value)
{
    if(value.hasOwnProperty('release_date'))
    {
        movieRelease = `${value.release_date}`;
    }
    else if(value.hasOwnProperty('first_air_date'))
    {
        movieRelease = `${value.first_air_date}`;
    }
    else
    {
        movieRelease = "Release Date UnKnown";
    }
}
function checkMovieVote(value)
{
    if(value.vote_average < 1)
    {
        stars = `<i class="fa-solid fa-star text-muted fs-6"></i>`;
    }
    else if(value.vote_average < 2)
    {
        let term = '';
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if(value.vote_average < 3)
    {
        stars =  `<i class="fa-solid fa-star text-warning fs-6"></i>`;
    }
    else if(value.vote_average <4)
    {
        let term = '';
        for (let i = 0; i < 1; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if(value.vote_average <5)
    {
        let term = '';
        for (let i = 0; i < 2; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    else if(value.vote_average <6)
    {
        let term = '';
        for (let i = 0; i < 2; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if(value.vote_average < 7)
    {
        let term = '';
        for (let i = 0; i < 3; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    else if(value.vote_average < 8)
    {
        let term = '';
        for (let i = 0; i < 3; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else if(value.vote_average < 9)
    {
        let term = '';
        for (let i = 0; i < 4; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
    else if(value.vote_average < 10)
    {
        let term = '';
        for (let i = 0; i < 4; i++) {
        term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term + `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }
    else
    {
        let term = '';
        for (let i = 0; i < 5; i++) {
            term += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars = term;
    }
}