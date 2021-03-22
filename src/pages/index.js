import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import '../styles/index.scss';
import SEO from '../components/seo';

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date
          description
          title
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const splash = (
    <div className="text-centered absolute-centered">
      <h1 className="splash-title text-shadow">
        <span className="accent-text">l</span>iam
        <span className="accent-text">d</span>alg
      </h1>
    </div>
  );
  return (
    <Layout bannerHeight="250px" banner={splash}>
      <SEO title="Home" />
      <div className="container">
        <h1 className="container-title">About Me</h1>
        <div className="container-body justified-text spaced-text">
          <p>
            Hey, I'm Liam. I'm a fourth year student at the University of
            Bristol studying Computer Science. I'm interested in a pretty much
            anything related to Mathematics, Computer Science, and Physics...
            but especially quantum computation, machine learning, and cyber
            security. I also like Team Fortress 2, photography, guitar, and
            Joywave.
          </p>
          <p>
            I originally made this website with the intention of writing about
            programming and things I find interesting. Well, two years later and
            it's still not done, but I get closer every few months!
          </p>
          <strong>
            I'm currently searching for internships & research positions related
            to quantum computation. If you've somehow found your way here and
            are interested please get in touch!
          </strong>
        </div>
      </div>
      <div className="container">
        <h1 className="container-title">Experience</h1>
        <div className="container-body justified-text spaced-text">
          <ul>
            <li>Some stuff I did</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <h1 className="container-title">Recent Blog Posts</h1>
        <ul>
          {data.allMarkdownRemark.nodes.map(node => (
            <li>
              <a href={node.fields.slug}>{node.frontmatter.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default IndexPage;
