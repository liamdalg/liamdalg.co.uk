import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/blog.scss';

const Blog = ({ data }) => {
  // const edges = [...data.allMarkdownRemark.edges];
  const banner = (
    <div className="text-centered absolute-centered">
      <h1 className="splash-title text-shadow">
        <span className="accent-text">B</span>log
      </h1>
    </div>
  );
  return (
    <Layout banner={banner} bannerHeight="250px">
      <SEO title="Blog" />
      <div className="container">
        <div className="blog-grid">
          {data.allMarkdownRemark.edges.map(edge => (
            <div className="blog-grid-container">
              <h2 className="blog-grid-title">
                <Link to={edge.node.fields.slug}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <p
                className="blog-grid-description spaced-text"
                dangerouslySetInnerHTML={{
                  __html: edge.node.frontmatter.description,
                }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Blog;
