import React from "react";
import { Link } from "gatsby";
import { Subtitle, Title, TitleWrapper, Wrapper } from "./element";

const Card = ({ post }) => (
  <Wrapper>
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <div style={{ position: "relative" }}>
          <img
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title + "- Featured Shot"}
            style={{
              maxHeight: 300,
              minHeight: 300,
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <TitleWrapper>
            {post.frontmatter.subtitle && (
              <Subtitle>
                <span> {post.frontmatter.subtitle}</span>
              </Subtitle>
            )}

            <Link to={post.frontmatter.path}>
              <Title>
                <span> {post.frontmatter.title} </span>
              </Title>
            </Link>
          </TitleWrapper>
        </div>
      )}
    </Link>
  </Wrapper>
);
export default Card;
