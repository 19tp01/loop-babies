import React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="About" />
      <div className="about-cover">
        <Image filename="about-cover.png" />
      </div>
      <div className="container about-text">
        <h1>{t("ABOUT.TITLE")}</h1>
        <p>{t("ABOUT.DESCRIPTION")}</p>
      </div>
    </Layout>
  )
}

export default AboutPage
