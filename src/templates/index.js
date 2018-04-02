import React from 'react';
import Link from 'gatsby-link'
import Post from '../components/Post';

function IndexPage ({ data, pathContext }) {
  console.log(pathContext);
  return (
    <div className="index-template">
      <div className="index-page">
        {
          pathContext.group.map(post => (
            <Post key={post.node.id} {...post} />
          ))
        }
      </div>
      <PageSelector {...pathContext} />
    </div>
  );
}

function PageSelector ({ index, pageCount, first, last }) {
  return (
    <div className="page-selector">
    <h3>
    { first ? null : <Link to={getIndexPath(index - 1)}>{'\u2190'}</Link> }
    <span />
    { renderAllLinks(pageCount) }
    <span />
    { last ? null : <Link to={getIndexPath(index + 1)}>{'\u2192'}</Link> }
    </h3>
    </div>
  );
}

function renderAllLinks(pageCount) {
  if (!pageCount) {
    return [];
  } else {
    return [
      ...renderAllLinks(pageCount - 1),
      (
        <Link key={pageCount} to={getIndexPath(pageCount)}>
          {`${pageCount}`}
        </Link>
      ),
    ];
  }
}

function getIndexPath(index) {
  if (index === 1) {
    return '/';
  } else {
    return `/${index}`
  }
}

export default IndexPage;
