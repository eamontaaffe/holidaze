const _ = require("lodash")
const fs = require(`fs-extra`)
const createPaginatedPages = require("gatsby-paginate")
const path = require("path")
const select = require(`unist-util-select`)

const PAGINATION_LENGTH = 12;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.js")
    resolve(
      graphql(
        `
          query GatsbyNodeQuery {

            posts: allMarkdownRemark(
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
                        fixed(
                          width: 360
                          height: 360
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

            hiddenPosts: allMarkdownRemark(
              filter: {frontmatter: {hidden: {ne: false}}}
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
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

        const edges = result.data.posts.edges;

        // Create paginated index pages
        createPaginatedPages({
          edges,
          createPage,
          pageTemplate: "src/templates/index.js",
          pageLength: PAGINATION_LENGTH,
        });

        const hiddenPosts = result.data.hiddenPosts.edges;
        const allPosts = _.concat(edges, hiddenPosts);

        // Create blog posts pages
        _.each(allPosts, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
          })
        })
      })
    )
  })
}
