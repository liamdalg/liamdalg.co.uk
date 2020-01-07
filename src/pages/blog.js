import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/blog.scss';

const Blog = ({ data }) => {
  const edges = [...data.allMarkdownRemark.edges, ...data.allMarkdownRemark.edges, ...data.allMarkdownRemark.edges];
  console.log(edges);
  const banner = (
    <div className="text-centered absolute-centered main-link">
      <h1 className="banner-title">Blog</h1>
    </div>
  );
  return (
    <Layout banner={banner} bannerHeight="200px">
      <SEO title="Blog" />
      <div className="container">
        <div className="blog-grid">
          {edges.map(edge => (
            <div className="blog-grid-container">
              <h3 className="blog-grid-title">
                <Link to={edge.node.fields.slug}>
                  {edge.node.frontmatter.title}
                </Link>
              </h3>
              <p className="blog-grid-description">
                {edge.node.frontmatter.description}
              </p>
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
