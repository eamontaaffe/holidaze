import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

export default function Post(props) {
  const { node: { frontmatter: { title, path, image, date } } } = props;
    return (
    <div className="post">
      <Link to={path}>
        <Image fixed={image.childImageSharp.fixed} />
      </Link>
      <div className="title-container">
        <h3 className="title">{title}</h3>
      </div>
      <span className="date">{date}</span>
    </div>
  );
}
