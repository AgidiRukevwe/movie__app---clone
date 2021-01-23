import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { actionTypes } from "../utilities/Reducer";
import { useStateValue } from "../utilities/StateProvider";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./category.css";

//get category api

const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=4edf93c37d43370851cc777bf8a6f925&language=en-US";

function Category({ isCategory }) {
    const [categories, setCategories] = useState([]);
    const [{ categoryName }, dispatch] = useStateValue();

    useEffect(() => {
        // fetch data from api
        const fetchData = async () => {
            const request = await fetch(url);
            const data = await request.json();
            setCategories(data.genres);
        };
        fetchData();
    }, [url]);
    return (
        <div className={`category ${isCategory && "show"}`}>
            <SimpleBar style={{ maxHeight: 400 }}>
                <ul className={isCategory && "delay"}>
                    {categories.map((category) => (
                        <Link to={`/${category.id}`} className="link">
                            <li
                                className="category__li"
                                onClick={() => {
                                    // dispatching category name to react context state
                                    dispatch({
                                        type: actionTypes.SET_CATEGORYNAME,
                                        categoryName: category.name
                                    });
                                }}
                            >
                                {category.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </SimpleBar>
        </div>
    );
}

export default Category;
