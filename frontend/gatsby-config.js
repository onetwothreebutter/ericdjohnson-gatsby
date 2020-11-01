const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Eric Johnson's Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    //   {
    //       resolve: `gatsby-plugin-favicon`,
    //       options: {
    //           logo: "./src/favicon.png",
    //           injectHTML: true,
    //           icons: {
    //               android: true,
    //               appleIcon: true,
    //               appleStartup: true,
    //               coast: false,
    //               favicons: true,
    //               firefox: true,
    //               twitter: false,
    //               yandex: false,
    //               windows: false
    //           }
    //       }
    //   },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `page-assets`),
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `pzg9lpxw`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ]
}
