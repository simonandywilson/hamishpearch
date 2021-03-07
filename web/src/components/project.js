import React from "react";
import style from "./project.module.css";

const Project = (props) => {
    const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);
    return (
        <tr>
            <td
                className={style.project}
                onClick={() => setIsCollapsed(!isCollapsed)}
                role="presentation"
            >
                <div className={style.title}>
                    <span className={style.padding}>{props.title}</span>
                    <span className={style.cross}>&#10005;</span>
                </div>
                <div>{props.location}</div>
                <div>{props.date}</div>
            </td>
            <td
                className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
                aria-expanded={!isCollapsed}
            >
                <section> 
                    <div className={style.slider}></div>
                    <div className={style.description}>{props.description}</div>
                </section>
                {props.images}
                {props.children}
            </td>
        </tr>
    );
};

export default Project;
