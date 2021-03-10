import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
    const { seo } = useStaticQuery(getData);

    console.log(seo);

    return (
        <Helmet>
            <html lang="en" />
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io/" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content={seo.image}></meta>
        </Helmet>
    );
};

export default SEO;

const getData = graphql`
    {
        sanitySettings {
            title
            description
            image
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`;
