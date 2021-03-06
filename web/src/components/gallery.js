import React from "react";
import style from "./gallery.module.css";
import Image from "gatsby-image";

const Gallery = ({thumb, children}) => {
    return (
        <figure className={style.item}>
            <figcaption>
                <div className={style.name}>{thumb.name}</div>
                <div className={style.count}>{thumb.caption}</div>
            </figcaption>
            <div className={style.preview}>
                <Image
                    alt={thumb.alt}
                    fluid={{
                        ...thumb.thumbnail,
                        aspectRatio: 1.5,
                    }}
                />
            </div>
            <div className={style.gallery}>{children}</div>
        </figure>
    );
};

export default Gallery;
