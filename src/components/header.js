import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import scrollTo from "gatsby-plugin-smoothscroll"
import AniLink from "gatsby-plugin-transition-link/Anilink"

const Header = ({ siteTitle }) => (
  <header>
    <ul className="nav" id="top">
      <li>
        <AniLink cover bg="#FFFFFF" to="/">
          Home
        </AniLink>
      </li>
      <li>
        <AniLink cover bg="#FFFFFF" to="/works">
          Works
        </AniLink>
      </li>
      <li>
        <AniLink cover bg="#FFFFFF" to="/about">
          About
        </AniLink>
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
