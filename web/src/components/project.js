import React, { useState, useEffect, useRef } from "react";
import style from "./project.module.css";
import gsap from "gsap";

const Project = React.forwardRef((props, ref) => {
    // console.log(props.children[0]);

    // Variables for animated dom nodes
    let project = useRef(null);
    let cross = useRef(null);
    let wrapper = useRef(null);

    const [state, setState] = useState({
        collapsed: true,
        name: "close",
    });

    const childrenRef = useRef([]);

    const content = React.Children.map(props.children, (child, index) =>
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
            gsap.to(cross, {
                rotation: 45,
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
            gsap.to(cross, {
                rotation: 180,
                duration: 0.5,
            });
            gsap.to(childrenRef.current, {
                autoAlpha: 1,
                duration: 0.5,
                stagger: 0.25,
            });
        }
    });

    return (
        <tr ref={ref}>
            <td
                className={style.project}
                onClick={handleProject}
                // aria-expanded={state.collapsed}
                role="presentation"
                ref={(el) => (project = el)}
            >
                <div className={style.title}>
                    <span className={style.padding}>{props.title}</span>
                    <span className={style.cross} ref={(el) => (cross = el)}>
                        &#10005;
                    </span>
                </div>
                <div>{props.location}</div>
                <div>{props.date}</div>
            </td>
            <td className={style.wrapper} ref={(el) => (wrapper = el)}>
                {content}
            </td>
        </tr>
    );
});

export default Project;
