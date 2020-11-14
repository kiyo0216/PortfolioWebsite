import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="about">
      <div className="content">
        <SEO title="About me" />
        <h2 className="title-h2">
          Kiyotaka Akaiwa
        </h2>
        <div className="about-content-1">
          <div className="about-content-1-left">
            <h2>I&apos;m Kiyo, a Japanese-American Student Front-End Web Developer based in Los Angeles, California.</h2>
            <h3>I study Computer Information Systems at El Camino College, while self-studying front-end web development, especially Gatsby.js. I have knowledge of AWS for deploying websites.</h3>
          </div>
          <div className="about-content-1-right">
            <table>
              <tr>
                <td>2000</td>
                <td>Feb.</td>
                <td>Born in Tokyo, Japan</td>
              </tr>
              <tr>
                <td></td>
                <td>Jun.</td>
                <td>Moved to Los Angeles, California</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>Apr.</td>
                <td>Entered a high school in Osaka, Japan</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Mar.</td>
                <td>Graduated high school</td>
              </tr>
              <tr>
                <td></td>
                <td>Sep.</td>
                <td>Entered UCSD</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>Feb.</td>
                <td>Dropped out of UCSD</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>May.</td>
                <td>Entered El Camino College</td>
              </tr>
            </table>
          </div>
        </div>
        <Footer />
      </div>
      <div className="nav-background">
        <div className="background-3">
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
