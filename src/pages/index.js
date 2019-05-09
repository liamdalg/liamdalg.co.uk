import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import ParticlesJS from '../components/particles';
import DefaultConfig from '../components/particles-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/index.scss';

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        social {
          name
          link
        }
      }
    }
  }
`;

class IndexPage extends React.Component {
  state = {
    invertedHeader: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', () =>
      this.setState({
        invertedHeader: window.pageYOffset + 62 >= window.innerHeight,
      })
    );
  }

  render() {
    return (
      <Layout invertedHeader={this.state.invertedHeader}>
        <div className="home-splash text-centered">
          <div className="absolute-centered splash-info">
            <h1 className="splash-title">
              <span className="accent-text">l</span>iam
              <span className="accent-text">d</span>alg
            </h1>
            <h4 className="splash-subtitle">Something goes here.</h4>
            <div className="media-icons-wrapper">
              {this.props.data.site.siteMetadata.social.map(
                ({ name, link }) => (
                  <a
                    className="media-icon"
                    key={`media-icon-${name}`}
                    href={link}
                  >
                    <FontAwesomeIcon size="2x" icon={['fab', name]} />
                  </a>
                )
              )}
            </div>
          </div>
          <ParticlesJS config={DefaultConfig} />
          <div
            onClick={() =>
              document
                .querySelector('#firstContainer')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="arrow-down absolute-centeredX clickable"
          />
        </div>
        <div id="firstContainer" className="container">
          <h1 className="title">Hey There.</h1>
          <p>Development in progress with Gatsby.</p>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
