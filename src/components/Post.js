import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export default function Post(props) {
  const { node: { id, frontmatter: { title, path, image, date } } } = props;
    return (
    <div className="post">
      <Link to={path}>
        <Image resolutions={image.childImageSharp.resolutions} />
      </Link>
      <div className="title-container">
        <h3 className="title">{title}</h3>
      </div>
      <span className="date">{date}</span>
    </div>
  );
}
