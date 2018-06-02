module.exports = {
  siteMetadata: {
    title: 'Holidaze',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 700,
            backgroundColor: "white",
          }
        }]
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-70158454-13",
      },
    },
  ],
}
