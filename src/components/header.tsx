import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/header.scss';

interface HeaderProps {
  siteTitle: string;
  navLinks: { name: string; link: string }[];
}

export default class Header extends React.Component<HeaderProps, {}> {
  public render() {
    return (
      <header className="main-header">
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1rem`,
          }}
        >
          <h4 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {this.props.siteTitle}
            </Link>
          </h4>
          {this.props.navLinks.map(({ name, link }) => (
            <Link to={link} className="header-nav-link">
              {name}
            </Link>
          ))}
        </div>
      </header>
    );
  }
}
