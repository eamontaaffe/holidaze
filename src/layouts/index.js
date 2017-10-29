import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link';

import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div className="template">
    <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
    {children()}
    <h3 className="footer">
      &copy; Florence Li Ting Fong
    </h3>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
