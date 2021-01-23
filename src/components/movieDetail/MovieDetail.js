import React, { useEffect, useRef } from "react";
import { useStateValue } from "../utilities/StateProvider";
import CloseIcon from "@material-ui/icons/Close";
import "./movieDetail.css";
import { actionTypes } from "../utilities/Reducer";
import gsap from "gsap";

function MovieDetail({ detail }) {
    const [{ isVisible }, dispatch] = useStateValue();
    let baseLink = "https://image.tmdb.org/t/p/original";

    const style = {
        // backgroundImage: `url(${baseLink}${detail?.backdrop_path})`,
        backgroundSize: "cover",
        height: "600px"
    };

    const close = () => {
        dispatch({
            type: actionTypes.SET_IS_VISIBLE,
            isVisible: !isVisible
        });
    };

    return (
        <div className={`movieDetail ${isVisible && "visible"}`}>
            <CloseIcon className="movieDetail__close" onClick={close} />
            <div style={style} className="movieDetail__container">
                <div className="movieDetail--darken">
                    <img
                        className="movieDetail__poster"
                        src={`${baseLink}${detail?.poster_path}`}
                    />

                    <div className="movieDetail__info">
                        <h1 className="movieDetail__title">
                            {detail?.title || detail?.original_title}
                        </h1>
                        <p>{detail?.overview}</p>
                        <p>{detail?.original_language}</p>
                        <div className="movieDetail__stats">
                            <h3>Rating: {detail?.vote_average}</h3>
                            <p>Popularity: {Math.floor(detail?.popularity)}</p>
                            <p>Reviews: {Math.floor(detail?.vote_count)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
