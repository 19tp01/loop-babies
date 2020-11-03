import { Link, useI18next } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"
import React from "react"
import Instagram from "../icons/instagram.svg"
import Refresh from "../icons/refresh.svg"

const Header = ({ siteTitle }) => {
  const { languages, changeLanguage, language } = useI18next()

  return (
    <header
      style={{
        background: `#fff`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0.5rem 0.5rem`,
        }}
        className="navWrapper"
      >
        <ul>
          <li>
            <Link to="/">
              <Refresh />
            </Link>
          </li>
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
        <ul className="languages">
          {language === "en" ? (
            <li>
              <a
                className="head"
                href="#"
                onClick={e => {
                  e.preventDefault()
                  changeLanguage("zh")
                }}
              >
                中文
              </a>
            </li>
          ) : (
            <li>
              <a
                className="head"
                href="#"
                onClick={e => {
                  e.preventDefault()
                  changeLanguage("en")
                }}
              >
                ENGLISH
              </a>
            </li>
          )}
        </ul>
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
