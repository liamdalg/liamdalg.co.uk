import React from 'react';
import Layout from '../components/layout';
import defaultConfig from '../components/particles-config';
import loadParticles from '../components/particles';
import '../styles/blog.scss';

class Blog extends React.Component {
  // TODO: abstract this away
  componentDidMount() {
    loadParticles('particles-js', defaultConfig);
  }

  render() {
    return (
      <Layout>
        <div className="particles-wrapper">
          <div id="particles-js" className="particles-small" />
        </div>
      </Layout>
    )
  }
}

export default Blog;