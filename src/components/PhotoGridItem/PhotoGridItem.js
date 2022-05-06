import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const fixedSrc = src.split(".jpg")[0];
  // wexor-tmg-turtle@2x.jpg
  // wexor-tmg-turtle@2x.avif

  const avifDimentions = `${fixedSrc}.avif 1x, ${fixedSrc}@2x.avif 2x, ${fixedSrc}@3x.avif 3x`;
  const jpgDimentions = `${fixedSrc}.jpg 1x, ${fixedSrc}@2x.jpg 2x, ${fixedSrc}@3x.jpg 3x`;

  console.log({ jpgDimentions });
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <figure>
          <source srcSet={avifDimentions} type="image/avif" />
          <Image alt={alt} srcSet={jpgDimentions} />
        </figure>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
