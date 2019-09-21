import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = () => {
  const banner = (
    <div className="text-centered absolute-centered main-link">
      <h1>Projects</h1>
    </div>
  );
  return (
    <Layout banner={banner} bannerHeight="200px">
      <SEO title="Projects" />
    </Layout>
  );
};

export default Blog;
