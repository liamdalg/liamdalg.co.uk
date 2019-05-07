import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/header.scss';

interface HeaderProps {
  inverted: boolean;
  siteTitle: string;
  navLinks: { name: string; link: string }[];
}

export default class Header extends React.Component<HeaderProps, {}> {
  public render() {
    return (
      <header className="main-header">
        <div
          className="nav-container"
          style={{
            margin: `0 auto`,
            padding: `2rem 0rem`,
          }}
        >
          <nav className="navbar">
            <ul className="nav-left">
              <li>
                <Link
                  to="/"
                  className={
                    this.props.inverted ? 'main-link inverted' : 'main-link'
                  }
                >
                  {this.props.siteTitle}
                </Link>
              </li>
            </ul>
            <ul className="nav-right">
              {this.props.navLinks.map(({ name, link }) => (
                <li key={`navbar-link-${name}`}>
                  <Link
                    to={link}
                    activeClassName="nav-active"
                    className={
                      this.props.inverted
                        ? 'nav-link main-link inverted'
                        : 'nav-link main-link'
                    }
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
