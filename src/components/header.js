import { Link } from 'gatsby';
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/header.scss';

library.add(faBars);

const Header = ({ siteTitle, navLinks }) => (
  <>
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
          </ul>
          <ul className="nav-right-collapsed">
            <li className="nav-right-button">
              <FontAwesomeIcon className="fa-1em" width={16} icon={faBars} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
