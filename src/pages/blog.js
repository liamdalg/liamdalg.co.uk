import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  console.log(edges);
  const banner = (
    <div className="text-centered absolute-centered main-link">
      <h1>Blog</h1>
    </div>
  );
  return (
    <Layout banner={banner} bannerHeight="400px">
      <SEO title="Blog" />
      {edges.map(edge => (
        <div>
          <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
        </div>
      ))}
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
