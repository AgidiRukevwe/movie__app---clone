import React, { useEffect, useRef } from "react";
import CoverImage from "../CoverImage/CoverImage";
import MovieDetail from "../movieDetail/MovieDetail";
import Row from "../Row/Row";
import request from "../request";
import "./homePage.css";

function HomePage() {
    //get urls from request.js
    const movies = request;

    return (
        <div>
            <CoverImage url={request[3].url} />
            {movies.map((movie) => (
                <div>
                    <Row title={movie.title} url={movie.url} />
                </div>
            ))}
        </div>
    );
}

export default HomePage;
