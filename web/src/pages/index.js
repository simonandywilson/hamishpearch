import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";
import Header from "../components/header";
import Project from "../components/project";
import Slider from "../components/slider";
import Row from "../components/row";
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
                                {project.images.map((image) => {
                                    return (
                                        <Row
                                            key={image._key}
                                            title={image.title}
                                            materials={image.materials}
                                            dimensions={image.dimensions}
                                            date={image.date}
                                            size={image.size}
                                            alt={image.alt}
                                            image={image.asset.fluid}
                                            aspectRatio={image.asset.fluid.aspectRatio}
                                        ></Row>
                                    );
                                })}

                                {/* {project.gallery.length > 0 && (
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
                                                        durationFadeIn={1000}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </Gallery>
                                )} */}
                            </Project>
                        );
                    })}
                </tbody>
            </table>
            <Footer projectsActive={projectsActive} />
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
                            aspectRatio
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
