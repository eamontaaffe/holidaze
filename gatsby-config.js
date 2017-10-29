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
          options: { maxWidth: 770 }
        }]
      }
    },
    'gatsby-transformer-sharp',
  ],
}
