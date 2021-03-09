import React from "react";
import style from "./project.module.css";
import Image from "gatsby-image"

const Row = React.forwardRef((props, ref) => {
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
                            aspectRatio: 1.5,
                        }}
                        durationFadeIn={10000}
                    />
                </div>
            </div>
        </figure>
    );
});

export default Row;


