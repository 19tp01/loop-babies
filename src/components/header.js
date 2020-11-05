import { Link, useI18next } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"
import React from "react"
import Refresh from "../icons/refresh.svg"
import Globe from "../icons/globe.svg"

const Header = ({ siteTitle }) => {
  const { languages, changeLanguage, language } = useI18next()

  return (
    <header
      style={{
        background: `#fff`,
      }}
    >
      <div className="white-padding">
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0rem 0`,
          }}
          className="navWrapper"
        >
          <Link to="/"></Link>
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          {language === "en" ? (
            <a
              className="head languages"
              href="#"
              onClick={e => {
                e.preventDefault()
                changeLanguage("zh")
              }}
            >
              中文 <Globe />
            </a>
          ) : (
            <a
              className="head languages"
              href="#"
              onClick={e => {
                e.preventDefault()
                changeLanguage("en")
              }}
            >
              ENGLISH <Globe />
            </a>
          )}
          <ul className="menu">
            <li>
              <h1>
                <Link to="/about" className="head">
                  About
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link to="/" className="head">
                  Contact
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link to="/" className="head">
                  Schedule
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                <a
                  className="head"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/loop.babies/"
                >
                  Instagram
                </a>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
