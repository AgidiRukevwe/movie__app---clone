import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { actionTypes } from "../../utilities/Reducer";
import { useStateValue } from "../../utilities/StateProvider";
import "./eachCategory.css";

function EachCategory() {
    //use useParams to get id from address
    const { id } = useParams();
    const [categories, setCategories] = useState();

    const [{ details, isVisible, categoryName }, dispatch] = useStateValue();

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=4edf93c37d43370851cc777bf8a6f925&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`;

    useEffect(() => {
        // fetch data from api
        const fetchData = async () => {
            const request = await fetch(url);
            const data = await request.json();
            setCategories(data.results);
        };
        fetchData();
    });
    return (
        <div className="eachCate">
            <h1 className="eachCate__title">{categoryName}</h1>
            <div className="eachCate__list">
                {/* if there are categories, map out */}
                {categories?.map((category) => (
                    <div
                        className="eachCate__details"
                        onClick={() => {
                            // dispatch categories to context state
                            dispatch({
                                type: actionTypes.SET_DETAILS,
                                details: category
                            });
                            dispatch({
                                type: actionTypes.SET_IS_VISIBLE,
                                isVisible: !isVisible
                            });
                        }}
                        key={category.id}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/original${category.poster_path}`}
                            alt={category.title}
                            className="eachCate__poster"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EachCategory;
