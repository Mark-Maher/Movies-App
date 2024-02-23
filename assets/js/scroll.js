import { getMovie } from "./moviesData.js";
export function scroll()
{
    $(window).scroll(backToTop);
    function backToTop()
    {
        if (window.pageYOffset > 100) {
            $('#back-to-top').addClass("active");
            } else {
            $('#back-to-top').removeClass("active");   
        }
    }
}
export function getMovieAttr()
{
    if($(this).attr("attr") == "nowPlaying")
    {
        getMovie("movie/now_playing");
        topZero();
    }
    else if($(this).attr("attr") == "popular")
    {
        getMovie("movie/popular");
        topZero();
    }
    else if($(this).attr("attr") == "topRated")
    {
        getMovie("movie/top_rated");
        topZero();
    }
    else if($(this).attr("attr") == "trending")
    {
    getMovie("trending/movie/day");
    topZero();
    }
    else if($(this).attr("attr") == "upcoming")
    {
        getMovie("movie/upcoming");
        topZero();
    }
}
export function navGetSection()
{
    if($(this).attr("section"))
    {
    let sectionLocation = $($(this).attr("section")).offset().top;
    $('html, body').animate({scrollTop:sectionLocation}, 2000);
    }
}
export function topZero()
{
    $('html, body').animate({scrollTop:0}, 1500);
}