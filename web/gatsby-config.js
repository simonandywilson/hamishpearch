module.exports = {
    siteMetadata: {
        title: "Hamish Pearch",
        siteUrl: "https://hamishpearch-web.netlify.app",
    },
    plugins: [
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "39ib82ym",
                dataset: "production",
            },
        },
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
