import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/blog.scss';

const Blog = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
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
        {edges.map(edge => (
          <div>
            <h1 className="blog-post-title">
              <Link to={edge.node.fields.slug}>
                {edge.node.frontmatter.title}
              </Link>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(format: HTML, pruneLength: 200)
          frontmatter {
            title
            date
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
