import React, { useState, useEffect } from "react";
import style from "./project.module.css";
import Image from "gatsby-image";

const Row = React.forwardRef((props, ref) => {

    const [aspect, setAspect] = useState(0);

    useEffect(() => {
        if (props.aspectRatio > 1) {
            setAspect(1.5);
        } else if (props.aspectRatio < 1) {
            setAspect(0.66);
        } else {
            setAspect(1);
        }
    }, []);

    return (
        <figure className={style.figure} key={props._key} ref={ref}>
            <figcaption className={style.figcaption}>
                <div className={style.name}>{props.title}</div>
                <div className={style.count}>
                    {props.index}/{props.length}
                </div>
                <div className={style.materials}>{props.materials}</div>
                <div className={style.dimensions}>{props.dimensions}</div>
                <div className={style.year}>{props.date}</div>
            </figcaption>
            <div className={style.image}>
                <div className={style[props.size]}>
                    <Image
                        alt={props.alt}
                        fluid={{
                            ...props.image,
                            aspectRatio: aspect,
                        }}
                    />
                </div>
            </div>
        </figure>
    );
});

export default Row;
