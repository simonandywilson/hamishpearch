import React, { useEffect, useRef } from "react";
import style from "../styles/header.module.css";
import gsap from "gsap";

const Header = React.forwardRef((props, ref) => {
    let header = useRef(null);

    const closeProjects = () => {
        props.setProjectsActive(0);
    };

    useEffect(() => {
        gsap.to(header, {
            autoAlpha: 1,
            duration: 2
        });
    });

    return (
        <header
            className={style.header}
            ref={(el) => (header = el)}
            onClick={closeProjects}
            role="presentation"
        >
            <div>Title</div>
            <div className={style.details}>Details</div>
            <div className={style.date}>Year</div>
        </header>
    );
});

export default Header;
