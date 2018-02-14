import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { percentage: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    var winHeight = window.innerHeight;
    var body = document.body;
    var html = document.documentElement;
    var docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    var value = window.scrollY;

    var percentage = 100 - (value / (docHeight - winHeight)) * 100;
    this.setState({ percentage });
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <div className="post-header">
          <h2>{post.frontmatter.title}</h2>
          <p className="date">
            {post.frontmatter.date}
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <progress value={this.state.percentage} max="100" />
      </div>
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
