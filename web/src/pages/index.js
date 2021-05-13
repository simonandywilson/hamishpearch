import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";
import Header from "../components/header";
import Project from "../components/project";
import Slider from "../components/slider";
import Img from "../components/img";
import Vid from "../components/vid";
// import Gallery from "../components/gallery";
import Footer from "../components/footer";

import Image from "gatsby-image";
import gsap from "gsap";
import { SwiperSlide } from "swiper/react";
import "../styles/swiper.scss";
import "../styles/navigation.scss";
import "../styles/pagination.scss";

const Home = () => {
    const {
        allSanityProject: { nodes: projects },
    } = useStaticQuery(getData);

    // How many projects are active/opened
    const [projectsActive, setProjectsActive] = useState(0);
    const activePrev = useRef();
    useEffect(() => {
        activePrev.current = projectsActive;
    });
    const projectsActivePrev = activePrev.current;

    // Add useRef to each <Project>
    const projectRefs = useRef([]);
    projectRefs.current = [];

    const addToRefs = (el) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el);
        }
    };

    // Initial fade in
    useEffect(() => {
        gsap.to(projectRefs.current, {
            autoAlpha: 1,
            delay: 1.5,
            duration: 2,
            stagger: 0.3,
        });
    });

    return (
        <>
            <SEO />
            <Header setProjectsActive={setProjectsActive} />
            <table>
                <tbody>
                    {projects.map((project, i) => {
                        return (
                            <Project
                                ref={addToRefs}
                                projectsActive={projectsActive}
                                projectsActivePrev={projectsActivePrev}
                                setProjectsActive={setProjectsActive}
                                key={project._id}
                                title={project.title}
                                location={project.location}
                                date={project.date}
                            >
                                <Slider
                                    description={project._rawDescription}
                                    length={project.slider.length}
                                >
                                    {project.slider.map((image) => {
                                        return (
                                            <SwiperSlide key={image._key}>
                                                <Image
                                                    fluid={image.asset.fluid}
                                                    durationFadeIn={1000}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Slider>
                                {project.contents.map((content) => {
                                    return content._type === "img" ? (
                                        <Img
                                            key={content._key}
                                            title={content.title}
                                            materials={content.materials}
                                            dimensions={content.dimensions}
                                            date={content.date}
                                            size={content.size}
                                            alt={content.alt}
                                            image={content.asset.fluid}
                                            aspectRatio={content.asset.fluid.aspectRatio}
                                            pdf={content.pdf}
                                        />
                                    ) : (
                                        <Vid
                                            key={content._key}
                                            type={content.type}
                                            title={content.title}
                                            materials={content.materials}
                                            dimensions={content.dimensions}
                                            date={content.date}
                                            size={content.size}
                                            video={content._rawVideo}
                                            pdf={content.pdf}
                                        />
                                    );
                                })}
                            </Project>
                        );
                    })}
                </tbody>
            </table>
            <Footer projectsActive={projectsActive} setProjectsActive={setProjectsActive} />
        </>
    );
};

export default Home;

const getData = graphql`
    {
        allSanityProject(sort: { fields: [order], order: ASC }) {
            nodes {
                _id
                order
                title
                location
                date(formatString: "YYYY")
                slider {
                    _key
                    alt
                    asset {
                        fluid(maxWidth: 1000) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                _rawDescription
                contents: content {
                    ... on SanityImg {
                        _type
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
                                aspectRatio
                            }
                        }
                        pdf {
                            asset {
                                url
                            }
                        }
                    }
                    ... on SanityVid {
                        _type
                        _key
                        type
                        title
                        materials
                        dimensions
                        date(formatString: "YYYY")
                        size
                        _rawVideo(resolveReferences: { maxDepth: 10 })
                        pdf {
                            asset {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;
