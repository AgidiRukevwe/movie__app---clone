import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "./coverImage.css";

function CoverImage({ url }) {
    const [coverImage, setCoverImage] = useState();
    useEffect(() => {
        //fetch data from api
        (async () => {
            const request = await fetch(url);
            const data = await request.json();
            setCoverImage(
                data.results[
                    Math.floor(Math.random() * data.results.length - 1)
                ]
            );
        })();
        console.log(coverImage);
    }, [url]);
    const title = useRef(null);
    const overview = useRef(null);
    const btn = useRef(null);
    const cover__image = useRef(null);

    useEffect(() => {
        //add animations using gspa
        gsap.from(cover__image.current, {
            duration: 1.2,
            y: 200,
            z: 1,
            opacity: "0",
            ease: "power4",
            delay: 1
        });
        gsap.from(title.current, {
            duration: 1.2,
            x: -200,
            opacity: "0",
            ease: "power4",
            delay: "1"
        });
        gsap.from(overview.current, {
            duration: 1.2,
            opacity: "0",
            y: 50,
            ease: "ease-in",
            delay: "1.5"
        });

        gsap.from(btn.current, {
            duration: 1.2,
            opacity: "0",
            y: 50,
            ease: "ease-in",
            delay: "2"
        });
    }, []);

    const style = {
        background: `url(https://image.tmdb.org/t/p/original${coverImage?.backdrop_path})`,
        backgroundSize: "cover",
        height: "600px"
    };
    return (
        <div className="cover">
            <div ref={cover__image} style={style} className="cover__container">
                <div className="cover--darken">
                    <div className="cover--text">
                        <h1 ref={title} className="cover__title">
                            {coverImage?.title}
                        </h1>
                        <p ref={overview} className="cover__overview">
                            {coverImage?.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoverImage;
