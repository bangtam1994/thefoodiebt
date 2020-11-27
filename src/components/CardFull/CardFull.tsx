import React from "react";
import { Link } from "gatsby";
import { Image, Title, TitleWrapper, WrapperPost } from "./element";

const CardFull = ({ post }) => (
  <Link to={post.frontmatter.path}>
    {!!post.frontmatter.thumbnail && (
      <WrapperPost>
        <TitleWrapper>
          <Link to={post.frontmatter.path} style={{ textDecoration: "none" }}>
            <Title>
              <span> {post.frontmatter.title} </span>
            </Title>
          </Link>
        </TitleWrapper>
        <Image
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title + "- Featured Shot"}
        />
      </WrapperPost>
    )}
  </Link>
);
export default CardFull;
