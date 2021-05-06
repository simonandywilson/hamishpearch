import React, { useState, useRef, useEffect } from "react";
import PortableText from "@sanity/block-content-to-react";
import style from "../styles/description.module.css";
import gsap from "gsap";

const Description = (props) => {
    const hasWindow = typeof window !== "undefined";
    const mq = hasWindow ? window.matchMedia("screen and (min-width: 800px)") : undefined;
    let textContainer = useRef(null);
    let cross = useRef(null);

    const [state, setState] = useState({
        landscape: null,
        collapsed: false,
    });

    // Initial
    useEffect(() => {
        if (mq.matches) {
            setState({ landscape: true, collapsed: false });
        } else {
            setState({ landscape: false, collapsed: false });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Resize event listener
    useEffect(() => {
        function windowChange() {
            if (mq.matches) {
                setState({ ...state, landscape: true, collapsed: false });
            } else {
                setState({ ...state, landscape: false, collapsed: false });
            }
        }
        // On Resize
        try {
            // Chrome, Firefox & Safari 14<
            mq.addEventListener("change", windowChange);
        } catch (e1) {
            try {
                // Safari >13
                mq.addListener(windowChange);
            } catch (e2) {
                console.error(e2);
            }
        }
        return () => {
            try {
                // Chrome, Firefox & Safari 14<
                mq.removeEventListener("change", windowChange);
            } catch (e1) {
                try {
                    // Safari >13
                    mq.removeListener(windowChange);
                } catch (e2) {
                    console.error(e2);
                }
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // On Click
    function expandDescription() {
        // Check if portrait
        if (state.landscape === false) {
            // If collapsed
            if (state.collapsed === true) {
                setState({ ...state, collapsed: false });
                // If expanded
            } else if (state.collapsed === false) {
                setState({ ...state, collapsed: true });
            }
        }
    }

    // Collapse
    useEffect(() => {
        if (state.collapsed === true) {
            gsap.to(textContainer, {
                height: 0,
                duration: 1,
                ease: "Power3.easeOut",
            });
            gsap.to(cross, {
                rotation: 45,
                duration: 0.5,
            });
        } else if (state.collapsed === false) {
            gsap.set(textContainer, {
                height: "auto",
            });
            gsap.from(textContainer, {
                height: 0,
                duration: 1,
                ease: "Power3.easeOut",
            });
            gsap.to(cross, {
                rotation: 180,
                duration: 0.5,
            });
        }
    }, [state.collapsed]);

    return (
        <div className={style.description}>
            <div className={style.expand} onClick={expandDescription} role="presentation">
                <span className={style.padding}>Description</span>
                <span className={style.cross} ref={(el) => (cross = el)}>
                    &#10005;
                </span>
            </div>
            <div className={style.textContainer} ref={(el) => (textContainer = el)}>
                {props.description && (
                    <PortableText
                        className={style.text}
                        blocks={props.description}
                        renderContainerOnSingleChild={true}
                    />
                )}
            </div>
        </div>
    );
};

export default Description;
