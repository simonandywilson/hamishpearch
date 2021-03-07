import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Project from "../components/project";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import Image from "gatsby-image";

import style from "../components/project.module.css";

const Home = () => {
    const {
        allSanityProject: { nodes: projects },
    } = useStaticQuery(getData);

    const [state, setState] = useState(0)

    return (
        <>
            <Header />
            <table>
                <tbody>
                    {projects.map((project) => {
                        return (
                            <Project
                                collapsed={true}
                                key={project._id}
                                title={project.title}
                                location={project.location}
                                date={project.date}
                                description={project.description[0].children[0].text}
                                images={project.images.map((image, index) => {
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
                            >
                                <Gallery name={project.gallerytitle}>
                                    {project.gallery.map((image) => {
                                        return (
                                            <div key={image._key}>
                                                <Image
                                                    title={image.title}
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
                            </Project>
                        );
                    })}
                </tbody>
            </table>
            <Footer />
        </>
    );
};

export default Home;

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
                gallerytitle
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
