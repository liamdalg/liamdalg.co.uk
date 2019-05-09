import { Link } from 'gatsby';
import React from 'react';
import '../styles/header.scss';

const Header = ({ inverted, siteTitle, navLinks }) => (
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
              className={inverted ? 'main-link inverted' : 'main-link'}
            >
              {siteTitle}
            </Link>
          </li>
        </ul>
        <ul className="nav-right">
          {navLinks.map(({ name, link }) => (
            <li key={`navbar-link-${name}`}>
              <Link
                to={link}
                activeClassName="nav-active"
                className={
                  inverted
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

export default Header;