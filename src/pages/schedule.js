import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import Moment from "react-moment"
import "moment-timezone"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import performanceTimes from "../../content/performances.json"

const Schedule = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Schedule" />
      <div className="container page-height">
        <div className="page-center">
          <h1 className="secondary-heading small-bottom-margin">
            {t("SCHEDULE.TITLE")}
          </h1>
          <table style={{ maxWidth: "20rem", margin: "0 auto" }}>
            {performanceTimes.map((data, index) => {
              console.log(data)
              return (
                <tr key={`content_item_${index}`}>
                  <td>
                    <div className="table-box">
                      <h2>
                        <Moment format="MM/DD">{data.time}</Moment>
                      </h2>
                      <p>
                        <Moment format="h:mm A">{data.time}</Moment>
                      </p>
                    </div>
                  </td>
                  <td style={{ textAlign: "right", paddingLeft: "10px" }}>
                    <h1 style={{ fontSize: "2rem", fontWeight: "400" }}>
                      MAJI SQUARE
                    </h1>
                    <p>MAIN STAGE</p>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Schedule
