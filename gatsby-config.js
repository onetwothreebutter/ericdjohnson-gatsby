module.exports = {
  siteMetadata: {
    title: `Eric Johnson's Portfolio`,
  },
  plugins: [
      {
        resolve: `gatsby-plugin-react-helmet`,
      },
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
    {
      resolve: `gatsby-plugin-sass`
    }
  ]
}
