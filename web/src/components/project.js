import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import style from "./project.module.css";
import Image from "gatsby-image";

const Project = () => {
    const {
        allSanityProject: { nodes: projects },
    } = useStaticQuery(getData);

    return (
        <table>
            <tbody>
                {projects.map((project) => {
                    const count = project.images.length;
                    return (
                        <tr key={project.id}>
                            {/* Project info */}
                            <td className={style.project}>
                                <div className={style.title}>
                                    <span className={style.padding}>{project.title}</span>
                                    <span className={style.cross}>&#10005;</span>
                                </div>
                                <div>{project.location}</div>
                                <div>{project.date}</div>
                            </td>
                            {/* Slider & description */}
                            <td className={style.content}>
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
                                                    {index + 1}/{count}
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
                                                        // fluid={image.asset.fluid}
                                                        // aspectRatio={image.asset.aspectRatio}
                                                        // className={image.size}
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
                                <figure className={style.item}>
                                    <figcaption>
                                        <div className={style.name}>Extra</div>
                                        <div className={style.count}></div>
                                    </figcaption>
                                    <div className={style.preview}>
                                        <Image
                                            fluid={{
                                                ...project.gallery[0].asset.fluid,
                                                aspectRatio: 1.5,
                                            }}
                                        />
                                    </div>
                                    <div className={style.gallery}>
                                        {project.gallery.map((image) => {
                                            return (
                                                <div className={style.thumbnail}>
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
                                    </div>
                                </figure>
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
                title
                location
                date
                slider {
                    title
                    alt
                    asset {
                        fluid {
                            src
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
                            src
                        }
                    }
                }
                gallery {
                    title
                    alt
                    asset {
                        fluid(maxWidth: 1000) {
                            src
                        }
                    }
                }
            }
        }
    }
`;

export default Project;
