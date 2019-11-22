import React from 'react';
import './Layout.css';
import { StaticQuery, graphql, Link } from 'gatsby';
import Footer from './Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="template">
        <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
        {children}
        <Footer />
      </div>
    )}
  />
);

export default Layout;
