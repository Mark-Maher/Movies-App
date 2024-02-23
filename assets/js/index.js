import { validations } from "./formValidation.js";
import { openNav } from "./sideNav.js";
import { getMovie , searchMovie } from "./moviesData.js";
import { getMovieAttr, navGetSection, scroll, topZero } from "./scroll.js";
validations();
scroll();
getMovie("movie/now_playing");
$('.nav-menu').click(openNav);
$('.menu a').click(getMovieAttr);
$('.menu li a').click(navGetSection);
$("#back-to-top").click(topZero)
$('#search').on("input", e => {
    searchMovie(e.target.value);
    if(e.target.value == "")
    {
        getMovie("movie/now_playing");
    }
});
$(document).ready(function(){
    $('.loading').fadeOut(2000)
})
