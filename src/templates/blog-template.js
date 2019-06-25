import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const title = (
    <div className="text-centered absolute-centered main-link">
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.date}</h3>
    </div>
  );
  return (
    <Layout banner={title} bannerHeight="400px">
      <SEO title={`${frontmatter.title}`} />
      <div className="blog-post-container">
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default Template;
