import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import InlineSVG from 'react-inlinesvg';

import Layout from '../components/layout';
import defaultConfig from '../components/particles-config';
import '../styles/index.scss';
import loadParticles from '../components/particles';
import Progress from '../components/progress';

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
  componentDidMount() {
    loadParticles('particles-js', defaultConfig);
  }

  render() {
    const skillItems = this.props.data.site.siteMetadata.skills.sort(
      (a, b) => b.level - a.level
    );
    return (
      <Layout>
        <div className="home-splash text-centered">
          <div className="absolute-centered splash-info">
            <h1 className="splash-title">
              <span className="accent-text">l</span>iam
              <span className="accent-text">d</span>alg
            </h1>
            <h4 className="splash-subtitle">
              Under construction! (My CV works though)
            </h4>
          </div>
          <div id="particles-js" className="particles" />
          <div
            onClick={() =>
              document
                .querySelector('#firstContainer')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="arrow-down absolute-centeredX clickable"
          />
        </div>
        <div id="firstContainer" className="container home-about">
          <h1 className="home-about-title">About Me</h1>
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
          <div className="home-about-icons">
            {skillItems.map(({ name, text, level }) => (
              <div className="dev-icon-wrapper">
                <InlineSVG
                  className="dev-icon"
                  key={`icon-${name}`}
                  src={`images/${name}.svg`}
                />
                <Progress className="dev-icon-progress" level={level} />
                {/** <span className="dev-icon-text">{text}</span> */}
              </div>
            ))}
          </div>
        </div>
        <div className="container home-projects">Projects</div>
        <div className="container home-projects">Recent Blog Posts</div>
      </Layout>
    );
  }
}

export default IndexPage;
