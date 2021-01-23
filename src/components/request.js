const API_KEY = "4edf93c37d43370851cc777bf8a6f925";

//get urls from api

const request = [
    {
        title: "Trending",
        url:
            "https://api.themoviedb.org/3/trending/all/day?api_key=4edf93c37d43370851cc777bf8a6f925"
    },
    {
        title: "Discover",
        url:
            "https://api.themoviedb.org/3/discover/movie?api_key=4edf93c37d43370851cc777bf8a6f925&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    },

    {
        title: "Popular",
        url:
            "https://api.themoviedb.org/3/movie/popular?api_key=4edf93c37d43370851cc777bf8a6f925&language=en-US&page=1"
    },
    {
        title: "Now Showing",
        url:
            "https://api.themoviedb.org/3/movie/now_playing?api_key=4edf93c37d43370851cc777bf8a6f925&page=1"
    },
    {
        title: "TV Shows",
        url:
            "https://api.themoviedb.org/3/discover/tv?api_key=4edf93c37d43370851cc777bf8a6f925&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"
    },
    {
        title: "Upcoming",
        url:
            "https://api.themoviedb.org/3/movie/upcoming?api_key=4edf93c37d43370851cc777bf8a6f925&language=en-US&page=1"
    }
];

export default request;
