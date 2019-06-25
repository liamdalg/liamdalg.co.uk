import React from 'react';
import Layout from '../components/layout';
import '../styles/blog.scss';
import SEO from '../components/seo';

const Blog = () => {
  return (
    <Layout bannerHeight="400px">
      <SEO title="Blog" />
      <h1>Blogging</h1>
    </Layout>
  );
};

export default Blog;
