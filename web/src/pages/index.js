import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import style from "../styles/index.module.css";

const Home = ({ data }) => {
    const {
        allSanityProject: { nodes: projects },
    } = data;

    return (
        <Layout>
            {projects.map((project) => {
                return (
                    <tr key={project.id}>
                        <td className={style.project}>
                            <div className={style.title}>
                                <span className={style.padding}>{project.title}</span>
                                <span className={style.cross}>&#10005;</span>
                            </div>
                            <div>{project.location}</div>
                            <div>{project.date}</div>
                        </td>
                        <td className={style.content}>
                            <section>
                                <div className={style.gallery}></div>
                                <div className={style.description}>
                                    {project.description[0].children[0].text}
                                </div>
                            </section>
                            {project.images.map((image) => {
                                console.log(image)
                                return (
                                    <figure className={style.item} key={image._key}>
                                        <figcaption>
                                            <div className={style.name}>{image.title}</div>
                                            <div className={style.count}>{image._key}</div>
                                            <div className={style.materials}>{image.materials}</div>
                                            <div className={style.dimensions}>
                                                {image.dimensions}
                                            </div>
                                            <div className={style.year}>{image.year}</div>
                                        </figcaption>
                                        <div className={style.image}>
                                            <div className={style[image.size]}>
                                                <img src={image.asset.url}></img>
                                            </div>
                                        </div>
                                    </figure>
                                );
                            })}
                        </td>
                    </tr>
                );
            })}
        </Layout>
    );
};

export const query = graphql`
    {
        allSanityProject {
            nodes {
                id
                title
                location
                date(formatString: "YYYY")
                gallery {
                    asset {
                        title
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
                    asset {
                        url
                    }
                }
            }
        }
    }
`;

export default Home;
