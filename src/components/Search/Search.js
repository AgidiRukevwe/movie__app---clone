import React, { useEffect, useState } from "react";
import { actionTypes } from "../utilities/Reducer";
import { useStateValue } from "../utilities/StateProvider";
import "./search.css";

function Search() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState([]);
    const [{ details, isVisible }, dispatch] = useStateValue();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4edf93c37d43370851cc777bf8a6f925&query=${query}`;

    useEffect(() => {
        //fetching url
        const fetchData = async () => {
            const request = await fetch(url);
            const data = await request.json();
            setResults(data.results);
        };
        fetchData();
    });
    return (
        <div className="search">
            <div className="search--upper">
                <h1 className="search__title">#logo</h1>

                {/* set the query to input value */}
                <input
                    className="search__input"
                    type="text"
                    placeholder
                    onChange={(event) => setQuery(event.target.value)}
                />
            </div>
            <div>
                <h1 className="search__title sub">
                    {/* check if there is results */}
                    {results ? "Results" : ""}
                </h1>
                <div className="search__list">
                    {
                        //get each movie from the result
                        results?.map((result) => (
                            <div
                                className="search__details"
                                onClick={() => {
                                    // dispatch result to react context state
                                    dispatch({
                                        type: actionTypes.SET_DETAILS,
                                        details: result
                                    });
                                    dispatch({
                                        type: actionTypes.SET_IS_VISIBLE,
                                        isVisible: !isVisible
                                    });
                                }}
                                key={result.id}
                            >
                                {/* display image */}
                                <img
                                    src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                                    alt={result.title}
                                    className="search__poster"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;
