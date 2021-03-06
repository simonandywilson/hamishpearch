import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import style from "./project.module.css";
import Image from "gatsby-image";

import Gallery from "../components/gallery";

const Project = ({ params }) => {
    
    const {
        allSanityProject: { nodes: projects },
    } = useStaticQuery(getData);

    // Gallery Setup
    const [thumb, setThumb] = useState({
        name: "Gallery Name",
        caption: "Initial Caption",
        thumbnail: null,
        alt: "alt",
    });

    return (
        <table>
            <tbody>
                {projects.map((project) => {
                    return (
                        <tr key={project._id}>
                            {/* Project info */}
                            <td
                                className={style.project}
                                onClick={() => params.setState(1)}
                                role="presentation"
                            >
                                <div className={style.title}>
                                    <span className={style.padding}>{project.title}</span>
                                    <span className={style.cross}>&#10005;</span>
                                </div>
                                <div>{project.location}</div>
                                <div>{project.date}</div>
                            </td>
                            {/* Content */}
                            <td className={style.content}>
                                {/* Slider & description */}
                                <section>
                                    <div className={style.gallery}></div>
                                    <div className={style.description}>
                                        {project.description[0].children[0].text}
                                    </div>
                                </section>
                                {/* Images */}
                                {project.images.map((image, index) => {
                                    return (
                                        <figure className={style.item} key={image._key}>
                                            <figcaption>
                                                <div className={style.name}>{image.title}</div>
                                                <div className={style.count}>
                                                    {index + 1}/{project.images.length}
                                                </div>
                                                <div className={style.materials}>
                                                    {image.materials}
                                                </div>
                                                <div className={style.dimensions}>
                                                    {image.dimensions}
                                                </div>
                                                <div className={style.year}>{image.date}</div>
                                            </figcaption>
                                            <div className={style.image}>
                                                <div className={style[image.size]}>
                                                    <Image
                                                        alt={image.alt}
                                                        fluid={{
                                                            ...image.asset.fluid,
                                                            aspectRatio: 1.5,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </figure>
                                    );
                                })}
                                {/* Gallery */}
                                <Gallery thumb={thumb}>
                                    {project.gallery.map((image) => {
                                        return (
                                            <div
                                                className={style.thumbnail}
                                                key={image._key}
                                                onMouseOver={() => {
                                                    setThumb({
                                                        caption: image.title,
                                                        thumbnail: image.asset.fluid,
                                                        alt: image.alt,
                                                    });
                                                }}
                                                onFocus={() => {
                                                    setThumb({
                                                        caption: image.title,
                                                        thumbnail: image.asset.fluid,
                                                        alt: image.alt,
                                                    });
                                                }}
                                                role="presentation"
                                            >
                                                <Image
                                                    alt={image.alt}
                                                    fluid={{
                                                        ...image.asset.fluid,
                                                        aspectRatio: 1.5,
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </Gallery>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

const getData = graphql`
    {
        allSanityProject {
            nodes {
                _id
                title
                location
                date(formatString: "YYYY")
                slider {
                    title
                    alt
                    asset {
                        fluid {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                description {
                    children {
                        text
                    }
                }
                images {
                    _key
                    title
                    materials
                    dimensions
                    date(formatString: "YYYY")
                    size
                    alt
                    asset {
                        fluid(maxWidth: 2000) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                gallery {
                    _key
                    title
                    alt
                    asset {
                        fluid(maxWidth: 1000) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;

export default Project;
