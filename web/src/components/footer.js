import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as style from "../styles/footer.module.css";
import gsap from "gsap";
import Time from "../components/time"

const Footer = (props) => {
    const {
        sanityAbout: { columnOne, columnTwo, columnThree, cv, contact },
    } = useStaticQuery(getData);

    let footer = useRef(null);
    // let bio = useRef(null);
    let about = useRef(null);
    let plus = useRef(null);

    const [state, setState] = useState({
        disabled: false,
        collapsed: true,
        name: "close",
    });

    // Initial fade in
    useEffect(() => {
        gsap.to(footer, {
            autoAlpha: 1,
            duration: 2,
        });
    }, []);

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

    const handleFooter = () => {
        // If projects are opened
        if (props.projectsActive > 0) {
            props.setProjectsActive(0);
            setTimeout(() => setState({ disabled: false, collapsed: false, name: "open" }), 50);
        } else {
            // If collapsed & not disabled
            if (state.collapsed === true && state.disabled === false) {
                setState({ ...state, collapsed: false, name: "open" });
                // If expanded & not disabled
            } else if (state.collapsed === false && state.disabled === false) {
                setState({ ...state, collapsed: true, name: "close" });
            }
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
            // gsap.set(bio, {
            //     cursor: "pointer",
            // });
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
            // gsap.set(bio, {
            //     cursor: "pointer",
            // });
        } else if (state.collapsed === true && state.disabled === true) {
            gsap.to(footer, {
                paddingBottom: 0,
                bottom: -Math.abs(footerOffset),
                duration: 1,
                ease: "Power3.easeOut",
            });
            // gsap.set(bio, {
            //     cursor: "default",
            // });
        } else if (state.collapsed === false && state.disabled === true) {
            const timeline = gsap.timeline({
                onComplete: setState({ ...state, collapsed: true, name: "close" }),
            });
            timeline.set(about, {
                height: "auto",
            });
            timeline.to(about, {
                height: 0,
                duration: 1,
                ease: "Power3.easeOut",
            });
            timeline.to(
                plus,
                {
                    rotate: 45,
                    duration: 1,
                    ease: "Power3.easeOut",
                },
                "<"
            );
            timeline.to(footer, {
                paddingBottom: 0,
                bottom: -Math.abs(footerOffset),
                duration: 1,
                ease: "Power3.easeOut",
            });
            // timeline.set(bio, {
            //     cursor: "default",
            // });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.collapsed, state.disabled]);

    return (
        <footer className={style.footer} ref={(el) => (footer = el)}>
            <div
                className={style.bio}
                onClick={handleFooter}
                role="presentation"
                // ref={(el) => (bio = el)}
            >
                <div>{columnOne}</div>
                <div>{columnTwo}</div>
                <div>{columnThree}</div>
                <Time class={style.time}/>
                <div className={style.plus} ref={(el) => (plus = el)}>
                    &#10005;
                </div>
            </div>
            <div className={style.about} ref={(el) => (about = el)}>
                {cv.map((categories) => {
                    return (
                        <section className={style.section} key={categories._key}>
                            {categories.content.map((category) => {
                                const title = () => {
                                    if (category.title.length > 0) {
                                        if (category.title[0].hyperlink == null) {
                                            if (category.title[0].subtitle == null) {
                                                return <>{category.title[0].title}</>;
                                            } else {
                                                return (
                                                    <>
                                                        {category.title[0].title}&#44;
                                                        <span className={style.subtitle}>
                                                            &nbsp;
                                                            {category.title[0].subtitle}
                                                        </span>
                                                    </>
                                                );
                                            }
                                            
                                        } else {
                                            if (category.title[0].subtitle == null) {
                                                return (
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={category.title[0].hyperlink}
                                                    >
                                                        {category.title[0].title}
                                                    </a>
                                                );
                                            } else {
                                                return (
                                                    <>
                                                        <a
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            href={category.title[0].hyperlink}
                                                        >
                                                            {category.title[0].title}&#44;
                                                        </a>
                                                        <span className={style.subtitle}>
                                                            &nbsp;
                                                            {category.title[0].subtitle}
                                                        </span>
                                                    </>
                                                );
                                            }
                                            
                                        }
                                    }
                                };
                                const kind = () => {
                                    if (category.kind.length > 0) {
                                        if (category.kind[0].hyperlink == null) {
                                            if (category.kind[0].subtitle == null) {
                                                return <>{category.kind[0].title}</>;
                                            } else {
                                                return (
                                                    <>
                                                        {category.kind[0].title}&#44;
                                                        <span className={style.subtitle}>
                                                            &nbsp;
                                                            {category.kind[0].subtitle}
                                                        </span>
                                                    </>
                                                );
                                            }
                                        } else {
                                            if (category.kind[0].subtitle == null) {
                                                return (
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={category.kind[0].hyperlink}
                                                    >
                                                        {category.kind[0].title}
                                                    </a>
                                                );
                                            } else {
                                                return (
                                                    <>
                                                        <a
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            href={category.kind[0].hyperlink}
                                                        >
                                                            {category.kind[0].title}&#44;
                                                        </a>
                                                        <span className={style.subtitle}>
                                                            &nbsp;{category.kind[0].subtitle}
                                                        </span>
                                                    </>
                                                );
                                            }
                                        }
                                    }
                                };
                                const location = () => {
                                    if (category.location.length > 0) {
                                        if (category.location[0].hyperlink == null) {
                                            if (category.location[0].subtitle == null) {
                                                return <>{category.location[0].title}</>;
                                            } else {
                                                return (
                                                    <>
                                                        {category.location[0].title}&#44;
                                                        <span className={style.subtitle}>
                                                            &nbsp;
                                                            {category.location[0].subtitle}
                                                        </span>
                                                    </>
                                                );
                                            }
                                        } else {
                                            if (category.location[0].subtitle == null) {
                                                return (
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={category.location[0].hyperlink}
                                                    >
                                                        {category.location[0].title}
                                                    </a>
                                                );
                                            } else {
                                                return (
                                                    <>
                                                        <a
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            href={category.location[0].hyperlink}
                                                        >
                                                            {category.location[0].title}&#44;
                                                        </a>
                                                        <span className={style.subtitle}>
                                                            &nbsp;{category.location[0].subtitle}
                                                        </span>
                                                    </>
                                                );
                                            }
                                        }
                                    }
                                };

                                return (
                                    <div className={style.row} key={category._key}>
                                        <div className={style.title}>
                                            {title()}
                                        </div>
                                        <div className={style.kind}>
                                            {kind()}
                                        </div>
                                        <div className={style.location}>
                                            {location()}
                                        </div>
                                        <div className={style.date}>{category.date}</div>
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
            columnOne
            columnTwo
            columnThree
            cv {
                _key
                content {
                    _key
                    title {
                        title
                        subtitle
                        hyperlink
                    }
                    kind {
                        title
                        subtitle
                        hyperlink
                    }
                    location {
                        title
                        subtitle
                        hyperlink
                    }
                    date
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
