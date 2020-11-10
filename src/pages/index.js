import React from "react"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import Image from "../components/image"
import Form from "../components/form"
import SEO from "../components/seo"

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t("Home")} />
      <section className="intro">
        <div className="title">
          <div className="logo-box">
            <span className="circle cavin-face">
              <Image filename="Cavin.png" />
            </span>
            <span className="circle claire-face">
              <Image filename="Claire.png" />
            </span>
            <span className="circle terry-face">
              <Image filename="Terry.png" />
            </span>
          </div>
          <h1 className="logo-text">{t("INDEX.TITLE")}</h1>
        </div>
        <a href="/#submit">
          <div className="scroll-box">
            <div className="arrow-container">
              <div className="arrow"></div>
            </div>
            <p>{t("INDEX.REQUEST_LINK")}</p>
          </div>
        </a>
      </section>
      <section className="submit-song">
        <a name="submit" id="submit" />
        <div className="margin-bottom margin-top align-center">
          <h1>{t("FORM.TITLE")}</h1>
        </div>
        <Form />
      </section>
    </Layout>
  )
}

export default IndexPage
