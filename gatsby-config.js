module.exports = {
  siteMetadata: {
    title: `Eric Johnson's Portfolio`,
  },
  plugins: [
      {
        resolve: `gatsby-plugin-react-helmet`,
      },
      {
        resolve: `@jacobmischka/gatsby-plugin-react-svg`,
      },
      {
          resolve: `gatsby-plugin-favicon`,
          options: {
              logo: "./src/favicon.png",
              injectHTML: true,
              icons: {
                  android: true,
                  appleIcon: true,
                  appleStartup: true,
                  coast: false,
                  favicons: true,
                  firefox: true,
                  twitter: false,
                  yandex: false,
                  windows: false
              }
          }
      },
    {
      resolve: `gatsby-plugin-eslint`
    },
    {
      resolve: `gatsby-plugin-sass`
    }
  ]
}
