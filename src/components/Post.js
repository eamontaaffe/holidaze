import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export default function Post(props) {
  const { node: { id, frontmatter: { title, path, image, date } } } = props;
    return (
    <div className="post">
      <Link to={path}>
        <Image blurUp resolutions={image.childImageSharp.resolutions} />
      </Link>
      <h3>{title}</h3>
      <span className="date">{date}</span>
    </div>
  );
}
