import React from 'react';

import Post from '../components/Post';

const IndexPage = ({ data }) => (
  <div className="index-page">
    {
      data.allMarkdownRemark.edges.map(post => (
        <Post key={post.node.id} {...post} />
      ))
    }
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { hidden: { ne: true } } }
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
                resolutions(width: 360, height: 360) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`
