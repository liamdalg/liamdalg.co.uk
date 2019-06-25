import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const banner = (
  <div className="err-splash absolute-centered">
    <h1>Whoops!</h1>
    <h3>404: Route not found.</h3>
  </div>
);

const NotFoundPage = () => (
  <Layout banner={banner} bannerHeight="100vh">
    <SEO title="404: Not found" />
  </Layout>
);

export default NotFoundPage;
