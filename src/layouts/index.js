import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import './index.css';

const Subscription = () => (
  <div className="footer">
    <form className="subscription">
      <input type="text" placeholder="Email"/>
      <button>Subscribe</button>
    </form>
    <div>
      <h3 className="copywrite">
  &copy; All images are copyright of <a href= "http://www.florenceltf.com">Florence Li Ting Fong</a> and <a href="https://eamontaaffe.github.io">Eamon Taaffe</a>.
      </h3>
    </div>
  </div>
);

const TemplateWrapper = ({ children, data }) => (
  <div className="template">
    <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
    {children()}
    <Subscription />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
