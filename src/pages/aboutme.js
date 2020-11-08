import React from "react";
import { graphql } from "gatsby";
import bt from "../images/bt.jpeg";
import bt_2 from "../images/bt_2.jpg";

import Layout from "../components/layout";
import Helmet from "react-helmet";

const AboutMe = ({ data: { site } }) => (
  <Layout>
    <Helmet>
      <title>A propos — {site.siteMetadata.title}</title>
      <meta
        name="description"
        content={"Contact page of " + site.siteMetadata.description}
      />
    </Helmet>
    <div style={{ margin: "20px 0px 40px 0px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: 40 }}> A propos de moi</h1>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <p style={{ marginRight: 30 }}>
          Ceci est mon premier blog dédié à ma passion de toujours, la
          gastronomie. Je souhaite au travers de ce blog vous présenter mes
          expériences culinaires, mes recettes, et autres merveilles. Etre{" "}
          <span style={{ color: "#ff9176e6" }}>Foodie</span>, c'est du boulot,
          de la passion et beaucoup de plaisir !
        </p>
        <img src={bt} alt="bangtamnguyen" className="bt-pic" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "70%",
        }}
      >
        <p style={{ marginRight: 40 }}>
          Je m'appelle Bang-Tam, j'ai 26 ans. J'ai fait du marketing au
          préalable avant de me lancer dans le développement web. Ce site sur
          lequel vous naviguez actuellement est monté en React/Node.js, sur le
          framework Gatsby. J'espère que vous l'aimerez !
        </p>
        <img src={bt_2} alt="bangtamnguyen2" className="bt-pic" />
      </div>
    </div>
  </Layout>
);
export default AboutMe;

export const pageQuery = graphql`
  query AboutMePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
