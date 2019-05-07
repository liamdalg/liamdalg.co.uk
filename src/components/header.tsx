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
            padding: `0.5rem 0.5rem`,
          }}
        >
          <nav className="navbar">
            <ul className="nav-left">
              <li>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  {this.props.siteTitle}
                </Link>
              </li>
            </ul>
            <ul className="nav-right">
              {this.props.navLinks.map(({ name, link }) => (
                <li>
                  <Link
                    to={link}
                    activeClassName="link-active"
                    className="header-nav-link"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
