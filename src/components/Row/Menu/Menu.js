import React, { useRef, useEffect, useState } from "react";
import "./menu.css";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Category from "../../Categories/Category";

function Menu() {
    const logo = useRef(null);
    const ul = useRef(null);
    const li = useRef(null);
    const [blackbar, setBlackbar] = useState(false);
    const [isCategory, setIsCategory] = useState(true);

    useEffect(() => {
        gsap.registerPlugin(scrollTrigger);

        gsap.from(logo.current, {
            duration: 0.5,
            opacity: 0,
            x: -200
        });
        gsap.from(ul.current, {
            duration: 1.2,
            opacity: 0,
            x: 200
        });
        gsap.from(ul.current.childNodes, {
            duration: 0.5,
            opacity: 0,
            // y: -200,
            // delay: 1,
            stagger: 0.5
        });

        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setBlackbar(true) : setBlackbar(false);
        });
    }, [logo]);

    const showCategory = () => {
        setIsCategory(!isCategory);
    };

    return (
        <div>
            <div className={`menu ${blackbar && "background"}`}>
                <h2 ref={logo} class="menu__logo">
                    #Logo
                </h2>
                <ul ref={ul} className="menu__ul">
                    <Link className="link" to="/">
                        <li className="menu__li">Home</li>
                    </Link>
                    <li className="menu__li" onClick={showCategory}>
                        Category
                    </li>

                    <Link className="link" to="/search">
                        <li className="menu__li">Search </li>
                    </Link>
                </ul>
            </div>
            <Category isCategory={isCategory} />
        </div>
    );
}

export default Menu;
