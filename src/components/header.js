import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"
import React from "react"
import Refresh from "../icons/refresh.svg"
import Globe from "../icons/globe.svg"

const Header = ({ siteTitle }) => {
  const { t } = useTranslation()
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
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          <h1 className="site-title">
            <Link className="head no-padding" to="/">
              {t("INDEX.TITLE")}
            </Link>
          </h1>

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
              english <Globe />
            </a>
          )}
          <ul className="menu">
            <li>
              <h1>
                <Link to="/about" className="head">
                  {t("HEADER.ABOUT")}
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                <a href="/#submit" className="head">
                  {t("HEADER.REQUEST")}
                </a>
              </h1>
            </li>
            <li>
              <h1>
                <Link to="/schedule" className="head">
                  {t("HEADER.SCHEDULE")}
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                <a href="#contact" className="head">
                  {t("HEADER.CONTACT")}
                </a>
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
                  {t("HEADER.INSTAGRAM")}
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
