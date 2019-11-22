import React from 'react'
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <Layout>
        <div>
          <div className="post-header">
            <h2>{post.frontmatter.title}</h2>
            <p className="date">
              {post.frontmatter.date}
            </p>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YY")
      }
    }
  }
`
