import { Link } from 'gatsby';
import React from 'react';
import '../styles/header.scss';

const Header = ({ siteTitle, navLinks, noSpacer }) => (
  <>
    {!noSpacer && (
      <div className="nav-container nav-placeholder">liamdalg placeholder</div>
    )}
    <header className="main-header">
      <div
        className="nav-container"
        style={{
          margin: `0 auto`,
          padding: `1rem 0rem`,
        }}
      >
        <nav className="navbar">
          <ul className="nav-left">
            <li>
              <Link to="/" className="main-link">
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
                  className="nav-link main-link"
                >
                  {name}
                </Link>
              </li>
            ))}
            <a
              href="/cv-pub.pdf"
              target="_blank"
              className="nav-link main-link"
            >
              CV
            </a>
          </ul>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
