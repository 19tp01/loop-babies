import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about-cover">
      <Image filename="about-cover.png" />
    </div>
    <div className="container about-text">
      <h1>About Us</h1>
      <p>
        Who knows where the loop babies came from? No one knows what they want
        or where they live, only that they show up every once in a while with a
        loop station and start playing the tunes of pop songs and classic tunes
        alike. There’s baby Claire and Cavin on vocals, and baby Terry on
        instrumentals. Together they form a band of incredible versatility and
        unexpected cuteness. Like any other baby, they demand lots of attention
        and care, so they would be very happy if you would come out and show
        them some love. They also like cookies.
      </p>
    </div>
  </Layout>
)

export default AboutPage
