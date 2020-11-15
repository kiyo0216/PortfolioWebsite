import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"

import { FaChevronDown } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import WorkCarousel from '../components/workCarousel'

const IndexPage = () => (
  <Layout>
    <div className="index">
      <div className="content">
        <div className="index-background-1">
          <SEO title="Home" />
          <h2 className="title-h2">
            Kiyotaka Akaiwa
          </h2>
          <div className="index-content-1">
            <h1>Hello,<br />I&apos;m<br />Kiyo</h1>
            <h2>
              I&apos;m a Front-end Web Developer.<br />
              I create static website using Gatsby.js.
            </h2>
          </div>
          <div className="down">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="index-content-2">
            <div className="skills-container">
              <h2>Frameworks</h2>
              <div className="skills">
                <div className="skill">
                  <Image filename="react.png" alt="react icon" />
                  <h3>React</h3>
                </div>
                <div className="skill">
                  <Image filename="gatsby.png" alt="react icon" />
                  <h3>Gatsby.js</h3>
                </div>
                <div className="skill">
                  <Image filename="node.png" alt="react icon" />
                  <h3>Node.js</h3>
                </div>
              </div>
            </div>
            <div className="skills-container">
              <h2>Languages</h2>
              <div className="skills">
                <div className="skill">
                  <Image filename="html.png" alt="react icon" />
                  <h3>HTML</h3>
                </div>
                <div className="skill">
                  <Image filename="css.png" alt="react icon" />
                  <h3>CSS</h3>
                </div>
                <div className="skill">
                  <Image filename="js.png" alt="react icon" />
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className="skills-container">
              <h2>Tools</h2>
              <div className="skills">
                <div className="skill">
                  <Image filename="adobe-xd.png" alt="react icon" />
                  <h3>Adobe XD</h3>
                </div>
                <div className="skill">
                  <Image filename="vim.png" alt="react icon" />
                  <h3>Vim</h3>
                </div>
                <div className="skill">
                  <Image filename="aws.png" alt="react icon" />
                  <h3>AWS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="index-content-3">
          <div className="index-content-3-background">
            <h2>Works</h2>
            <WorkCarousel /> 
          </div>
        </div>
        <div className="index-content-4">
          <h2>Contact</h2>
          <form action="https://getform.io/f/739b025a-e767-43dd-989d-3be034605c6c" method="POST">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <Footer />
      </div>
      <div className="nav-background">
        <div className="background-1"></div>
        <div className="background-2"></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
