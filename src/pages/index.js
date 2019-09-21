import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import '../styles/index.scss';
import SEO from '../components/seo';

export const query = graphql`
  query IndexImageQuery {
    fileName: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        skills {
          name
          text
          level
        }
      }
    }
  }
`;

class IndexPage extends React.Component {
  render() {
    const splash = (
      <div className="text-centered">
        <div className="absolute-centered splash-info">
          <h1 className="splash-title">
            <span className="accent-text">l</span>iam
            <span className="accent-text">d</span>alg
          </h1>
          <h4 className="splash-subtitle">Under construction!</h4>
        </div>
        <div
          onClick={() =>
            document
              .querySelector('#firstContainer')
              .scrollIntoView({ behavior: 'smooth' })
          }
          className="arrow-down absolute-centeredX clickable"
        />
      </div>
    );
    return (
      <Layout bannerHeight="100vh" banner={splash}>
        <SEO title="Home" />
        <div id="firstContainer" className="container home-about">
          <h1 className="container-title">About Me</h1>
          <div className="home-about-left">
            <Img
              className="rounded-image about-image"
              fluid={this.props.data.fileName.childImageSharp.fluid}
              alt="A picture of me!"
            />
          </div>
          <div className="home-about-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
            ipsum est. Vivamus ullamcorper sem erat, eu sodales metus finibus
            eu. Aliquam erat nunc, sagittis nec faucibus non, pulvinar a lectus.
            Duis leo ante, tempor ut leo sit amet, luctus cursus dolor. Quisque
            scelerisque sapien a nulla venenatis tincidunt. Quisque ac mauris a
            justo placerat euismod at bibendum leo. Nam dapibus finibus
            consequat. Phasellus urna mauris, efficitur et velit ac, posuere
            congue sapien. Sed nec neque est. In consequat arcu sit amet feugiat
            laoreet. Phasellus molestie, dolor non semper mattis, orci eros
            semper felis, vitae feugiat dui arcu ut leo.
          </div>
        </div>
        <div className="container home-projects">
          <h1 className="container-title">Projects</h1>
        </div>
        <div className="container home-projects">
          <h1 className="container-title">Recent Blog Posts</h1>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
