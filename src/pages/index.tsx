import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import '../styles/index.scss';

interface IndexProps {}

class IndexPage extends React.Component<IndexProps, {}> {
  public render() {
    return (
      <Layout>
        <div className="container">
          <h1 className="title">Hello World!</h1>
          <p>Development in progress with Gatsby + SASS + TypeScript.</p>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
