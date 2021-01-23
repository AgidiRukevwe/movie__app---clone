import React, { useEffect, useState, useRef } from "react";
import MovieDetail from "../movieDetail/MovieDetail";
import { actionTypes } from "../utilities/Reducer";
import { useStateValue } from "../utilities/StateProvider";
import gsap from "gsap";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./row.css";

function Row({ url, title }) {
    const [movies, setMovies] = useState([]);
    const [detail, setDetail] = useState([]);
    const row__details = useRef([]);
    const [{ details, isVisible }, dispatch] = useStateValue();

    //fetch data from api
    useEffect(() => {
        const fetchData = async () => {
            const request = await fetch(url);
            const data = await request.json();
            setMovies(data.results);
            console.log(data.results);
        };
        fetchData();
    }, [url]);

    //add animations using gsap
    useEffect(() => {
        revealRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                {
                    autoAlpha: 0,
                    x: -30
                },
                {
                    duration: 0.3,
                    autoAlpha: 1,
                    x: 0,
                    ease: "none",
                    stagger: 0.01,
                    scrollTrigger: {
                        id: `row-${index + 1}`,
                        trigger: el,
                        start: "top center+=100",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    });

    const revealRefs = useRef([]);
    revealRefs.current = [];
    const addToRef = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>

            {/* use simple user friendly scroll bar */}
            <SimpleBar style={{ maxHeight: 300 }}>
                <div className="row__container">
                    {movies.map((movie) => (
                        <div
                            className="row__details"
                            onClick={() => {
                                //dispatch movies to context api so that it can be accessible throughout the app
                                dispatch({
                                    type: actionTypes.SET_DETAILS,
                                    details: movie
                                });
                                dispatch({
                                    type: actionTypes.SET_IS_VISIBLE,
                                    isVisible: !isVisible
                                });
                            }}
                            key={movie.id}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt={movie.title}
                                className="row__poster"
                            />
                        </div>
                    ))}
                </div>
            </SimpleBar>
        </div>
    );
}

export default Row;
