import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import scrollTo from "gatsby-plugin-smoothscroll"

const Header = ({ siteTitle }) => (
  <header>
    <ul className="nav" id="top">
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/works">
          Works
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <a href="Kiyotaka Akaiwa Resume.pdf" download>
          Resume
        </a>
      </li>
      <li>
        <a href="#" onClick={() => scrollTo('#top')}>
          Top
        </a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
