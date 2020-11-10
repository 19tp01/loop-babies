import { Link, useI18next } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"
import React from "react"
import Refresh from "../icons/refresh.svg"
import Globe from "../icons/globe.svg"

const Footer = ({ siteTitle }) => {
  const { languages, changeLanguage, language } = useI18next()
  return (
    <footer id="contact">
      <p style={{ fontWeight: 800, letterSpacing: "0rem" }}>CONTACT US: </p>
      <a href="mailto: theloopbabies@gmail.com">theloopbabies@gmail.com</a>
    </footer>
  )
}

export default Footer
