import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import '../styles/index.scss';
import SEO from '../components/seo';

export const query = graphql`
  query MyQuery {
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
    <div className="text-centered">
      <div className="absolute-centered splash-info">
        <h1 className="splash-title">
          <span className="accent-text">l</span>iam
          <span className="accent-text">d</span>alg
        </h1>
      </div>
    </div>
  );
  return (
    <Layout bannerHeight="250px" noSpacer banner={splash}>
      <SEO title="Home" />
      <div className="container">
        <h1 className="container-title">About Me</h1>
        <div className="span-container justified-text spaced-text">
          <p>
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
          </p>
          <p>
            Fusce sagittis nulla sit amet posuere dapibus. Praesent facilisis
            elementum orci ac sollicitudin. Quisque quis posuere mauris. Donec
            tristique justo id tellus convallis auctor. Vivamus a consequat
            risus. Sed ipsum nunc, hendrerit ac suscipit in, iaculis sit amet
            purus. Nullam nec nisi ac diam consectetur molestie a ac sem.
          </p>
        </div>
      </div>
      <div className="container">
        <h1 className="container-title">Recent Blog Posts</h1>
        <ul class="span-container">
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
