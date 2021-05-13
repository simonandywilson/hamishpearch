import React, { useState, useEffect, useRef } from "react";
import style from "../styles/project.module.css";
import gsap from "gsap";

const Project = React.forwardRef((props, ref) => {
    let children = props.children.filter(Boolean);

    // Variables for animated dom nodes
    const childrenRef = useRef([]);
    let project = useRef(null);
    let underline = useRef(null);
    let wrapper = useRef(null);

    const [state, setState] = useState({
        collapsed: true,
        name: "close",
    });

    const content = React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
            ref: (ref) => (childrenRef.current[index] = ref),
        })
    );

    const handleProject = () => {
        if (state.collapsed === true) {
            setState({
                collapsed: !state.collapsed,
                menu: "open",
            });
            const value = props.projectsActive + 1;
            props.setProjectsActive(value);
        } else if (state.collapsed === false) {
            setState({
                collapsed: !state.collapsed,
                menu: "close",
            });
            const value = props.projectsActive - 1;
            props.setProjectsActive(value);
        }
    };

    const underlineIn = () => {
        if (state.collapsed === true) {
            gsap.set(underline, {
                autoAlpha: 1,
            });
        }
    };

    const underlineOut = () => {
        if (state.collapsed === true) {
            gsap.set(underline, {
                autoAlpha: 0,
            });
        }
    };

    // Close all projects
    useEffect(() => {
        if (props.projectsActivePrev > props.projectsActive) {
            setState({ collapsed: true, name: "close" });
            props.setProjectsActive(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.projectsActivePrev, props.projectsActive]);

    useEffect(() => {
        const rowPadding = parseInt(
            getComputedStyle(document.body).getPropertyValue("--row-padding"),
            10
        );
        const padding = parseInt(getComputedStyle(document.body).getPropertyValue("--padding"), 10);
        const stickyOffset = padding * 2 + rowPadding;

        if (state.collapsed === true) {
            // Close Project
            gsap.set(project, {
                position: "relative",
                top: "unset",
            });
            gsap.set(wrapper, {
                display: "none",
            });
            gsap.to(underline, {
                autoAlpha: 0,
                duration: 0.5,
            });
            gsap.to(childrenRef.current, {
                autoAlpha: 0,
            });
        } else if (state.collapsed === false) {
            // Open Project
            gsap.set(project, {
                position: "sticky",
                top: stickyOffset,
            });
            gsap.set(wrapper, {
                display: "block",
            });
            gsap.set(underline, {
                autoAlpha: 1,
            });
            gsap.to(childrenRef.current, {
                autoAlpha: 1,
                duration: 0.4,
                stagger: 0.2,
            });
        }
    });

    return (
        <tr ref={ref}>
            <td
                className={style.project}
                ref={(el) => (project = el)}
                onClick={handleProject}
                onMouseEnter={underlineIn}
                onMouseLeave={underlineOut}
                onFocus={underlineIn}
                role="presentation"
            >
                <div className={style.title}>
                    <span className={style.padding}>{props.title}</span>
                    <span className={style.underline} ref={(el) => (underline = el)}></span>
                </div>
                <div className={style.location}>{props.location}</div>
                <div className={style.date}>{props.date}</div>
            </td>
            <td className={style.wrapper} ref={(el) => (wrapper = el)}>
                {content}
            </td>
        </tr>
    );
});

export default Project;
