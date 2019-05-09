import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../styles/layout.scss';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faLinkedin);
library.add(faTwitter);
config.autoAddCss = false;

const Layout = ({ invertedHeader, children }) => (
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
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          inverted={invertedHeader}
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
        />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
);

export default Layout;
