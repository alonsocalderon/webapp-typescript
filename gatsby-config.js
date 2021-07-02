module.exports = {
    siteMetadata: {
        title: 'Gatsby Typescript Sample'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-offline',
        'gatsby-plugin-typescript',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: []
            }
        }
    ]
};
