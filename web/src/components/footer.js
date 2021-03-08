import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import style from "./footer.module.css";
import gsap from "gsap";

const Footer = (props) => {
    const {
        sanityAbout: { name, occupation, location, dob, cv, contact },
    } = useStaticQuery(getData);

    let footer = useRef(null);
    let about = useRef(null);
    let plus = useRef(null);

    const [state, setState] = useState({
        disabled: false,
        collapsed: true,
        name: "close",
    });

    // Set state to disabled if projects are opened
    useEffect(() => {
        if (props.projectsActive > 0) {
            // Project opened
            setState({ ...state, disabled: true });
        } else {
            // Projects closed
            setState({ ...state, disabled: false });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.projectsActive]);

    // useEffect(() => {
    //     console.log(state);
    // }, [state]);

    const handleFooter = () => {
        // If collapsed & not disabled
        if (state.collapsed === true && state.disabled === false) {
            setState({ ...state, collapsed: false, name: "open" });
            // If expanded & not disabled
        } else if (state.collapsed === false && state.disabled === false) {
            setState({ ...state, collapsed: true, name: "close" });
        }
    };

    useEffect(() => {
        const padding = parseInt(getComputedStyle(document.body).getPropertyValue("--padding"), 10);
        const rowHeight = parseInt(
            getComputedStyle(document.body).getPropertyValue("--row-height"),
            10
        );
        const footerOffset = rowHeight * 2;
        if (state.collapsed === true && state.disabled === false) {
            // Close Footer
            gsap.to(footer, {
                paddingBottom: 0,
                bottom: 0,
                duration: 1,
                ease: "Power3.easeOut",
            });
            gsap.to(about, {
                height: 0,
                duration: 1,
                ease: "Power3.easeOut",
            });
            gsap.to(plus, {
                rotate: 45,
                duration: 1,
                ease: "Power3.easeOut",
            });
        } else if (state.collapsed === false && state.disabled === false) {
            // Open Footer
            gsap.to(footer, {
                paddingBottom: padding,
                bottom: 0,
                duration: 1,
                ease: "Power3.easeOut",
            });
            gsap.set(about, {
                height: "auto",
                ease: "Power3.easeOut",
            });
            gsap.from(about, {
                height: 0,
                duration: 1,
                ease: "Power3.easeOut",
            });
            gsap.to(plus, {
                rotate: 180,
                duration: 1,
                ease: "Power3.easeOut",
            });
        } else if (state.collapsed === true && state.disabled === true) {
            gsap.to(footer, {
                paddingBottom: 0,
                bottom: -Math.abs(footerOffset),
                duration: 1,
                ease: "Power3.easeOut",
            });
        } else if (state.collapsed === false && state.disabled === true) {
            gsap.to(footer, {
                paddingBottom: 0,
                bottom: -Math.abs(footerOffset),
                duration: 1,
                ease: "Power3.easeOut",
            });
            gsap.to(about, {
                height: 0,
                duration: 1,
                ease: "Power3.easeOut",
            });
            gsap.to(plus, {
                rotate: 45,
                duration: 1,
                ease: "Power3.easeOut",
            });
        }
    });

    return (
        <footer className={style.footer} ref={(el) => (footer = el)}>
            <div className={style.bio} onClick={handleFooter} role="presentation">
                <div>{name}</div>
                <div>{occupation}</div>
                <div>{location}</div>
                <div>{dob}</div>
                <div className={style.plus} ref={(el) => (plus = el)}>
                    &#10005;
                </div>
            </div>
            <div className={style.about} ref={(el) => (about = el)}>
                {cv.map((categories) => {
                    return (
                        <section className={style.section} key={categories._key}>
                            {categories.content.map((category) => {
                                return (
                                    <div className={style.row} key={category._key}>
                                        <div>
                                            {category.name}&nbsp;
                                            <span className={style.subtitle}>
                                                {category.name_sub}
                                            </span>
                                        </div>
                                        <div>
                                            {category.type}&nbsp;
                                            <span className={style.subtitle}>
                                                {category.type_sub}
                                            </span>
                                        </div>
                                        <div>
                                            {category.location}&nbsp;
                                            <span className={style.subtitle}>
                                                {category.location_sub}
                                            </span>
                                        </div>
                                        <div>
                                            {category.date}&nbsp;
                                            <span className={style.subtitle}>
                                                {category.date_sub}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </section>
                    );
                })}
                <div className={style.contact}>
                    {contact.map((social) => {
                        return (
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                key={social._key}
                            >
                                {social.title}
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const getData = graphql`
    {
        sanityAbout {
            name
            occupation
            location
            dob
            cv {
                _key
                content {
                    _key
                    name
                    name_sub
                    type
                    type_sub
                    location
                    location_sub
                    date
                    date_sub
                }
            }
            contact {
                _key
                title
                link
            }
        }
    }
`;
