import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import style from "./footer.module.css";

const Footer = ({ props }) => {
    const {
        sanityAbout: { name, occupation, location, dob, cv, contact },
    } = useStaticQuery(getData);

    return (
        <footer>
            <div className={style.bio}>
                <div>{name}</div>
                <div>{occupation}</div>
                <div>{location}</div>
                <div>{dob}</div>
                <div className={style.plus}>&#10005;</div>
            </div>
            <div className={style.about}>
                {cv.map((categories) => {
                    return (
                        <section key={categories._key}>
                            {categories.content.map((category) => {
                                return (
                                    <div className={style.row} key={category._key}>
                                        <div>
                                            {category.name}&nbsp;
                                            <span className={style.subtitle}>
                                                {category.name_sub}
                                            </span>
                                        </div>
                                        <div>
                                            {category.type}&nbsp;
                                            <span className={style.subtitle}>
                                                {category.type_sub}
                                            </span>
                                        </div>
                                        <div>
                                            {category.location}&nbsp;
                                            <span className={style.subtitle}>
                                                {category.location_sub}
                                            </span>
                                        </div>
                                        <div>
                                            {category.date}&nbsp;
                                            <span className={style.subtitle}>
                                                {category.date_sub}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </section>
                    );
                })}
                <div className={style.contact}>
                    {contact.map((social) => {
                        return (
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                key={social._key}
                            >
                                {social.title}
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const getData = graphql`
    {
        sanityAbout {
            name
            occupation
            location
            dob
            cv {
                _key
                content {
                    _key
                    name
                    name_sub
                    type
                    type_sub
                    location
                    location_sub
                    date
                    date_sub
                }
            }
            contact {
                _key
                title
                link
            }
        }
    }
`;
