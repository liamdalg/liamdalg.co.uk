import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../styles/layout.scss';

interface LayoutProps {}

export default class Layout extends React.Component<LayoutProps, {}> {
  public render() {
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
              <main>{this.props.children}</main>
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
  }
}
