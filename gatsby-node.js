const _ = require("lodash")
const fs = require(`fs-extra`)
const createPaginatedPages = require("gatsby-paginate")
const path = require("path")
const select = require(`unist-util-select`)

const PAGINATION_LENGTH = 12;

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.js")
    resolve(
      graphql(
        `
          query GatsbyNodeQuery {
            allMarkdownRemark(
              sort: {fields: [frontmatter___date],
              order: DESC}, filter: {frontmatter: {hidden: {ne: true}}}
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    date(formatString: "DD.MM.YY")
                    title
                    image {
                      childImageSharp {
                        resolutions(
                          width: 360,
                          height: 360,
                          cropFocus: CENTER
                        ) {
                          base64
                          width
                          height
                          src
                          srcSet
                        }
                      }
                    }
                  }
                }
              }
            }
          }

    `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        // Get all post edges
        const edges = result.data.allMarkdownRemark.edges;

        // Create paginated index pages.
        createPaginatedPages({
          edges,
          createPage,
          pageTemplate: "src/templates/index.js",
          pageLength: PAGINATION_LENGTH,
        });

        // Create blog posts pages.
        _.each(edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path,
            },
          })
        })
      })
    )
  })
}
