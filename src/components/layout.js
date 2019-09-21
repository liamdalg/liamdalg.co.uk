import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Particles from 'react-particles-js';

import Header from './header';
import '../styles/layout.scss';
import defaultConfig from '../components/particles-config';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faGithub);
library.add(faLinkedin);
library.add(faTwitter);
config.autoAddCss = false;

class Layout extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                navLinks {
                  name
                  link
                }
                social {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              navLinks={data.site.siteMetadata.navLinks}
            />
            <div>
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#161616',
                  width: '100%',
                  height: this.props.bannerHeight,
                }}
              >
                {this.props.banner}
                <Particles className="particles" params={defaultConfig} />
              </div>
              <main>{this.props.children}</main>
              <footer>
                <div className="footer-wrapper">
                  <div className="media-icons-wrapper">
                    {data.site.siteMetadata.social.map(({ name, link }) => (
                      <a
                        className="media-icon"
                        key={`media-icon-${name}`}
                        href={link}
                      >
                        <FontAwesomeIcon width={48} icon={['fab', name]} />
                      </a>
                    ))}
                  </div>
                  <div className="footer-other">
                    <p>liamdalg99@gmail.com</p>
                    <p>
                      © 2019 Liam Dalgarno | Made with GatsbyJS and Github
                      Pages.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
