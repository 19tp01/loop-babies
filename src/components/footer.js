import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"

const Footer = ({ siteTitle }) => {
  const { t } = useTranslation()
  const { languages, changeLanguage, language } = useI18next()
  return (
    <footer id="contact">
      <p style={{ fontWeight: 800, letterSpacing: "0rem" }}>
        {t("HEADER.CONTACT_US")}{" "}
      </p>
      <a href="mailto: theloopbabies@gmail.com">theloopbabies@gmail.com</a>
    </footer>
  )
}

export default Footer
