import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export default function Post(props) {
  console.log(props)
  const { node: { frontmatter: { title, path, image, date } } } = props;
  return (
    <div className="post" key={title}>
      <Link to={path}>
        <Image fadeIn resolutions={image.childImageSharp.resolutions} />
      </Link>
      <h3>{title}</h3>
      <span className="date">{date}</span>
    </div>
  );
}
