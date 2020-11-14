import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"

class WorksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: true,
      image2: false,
      image3: false,
      image4: false
    }
  }
  image1() {
    console.log('clicked 1')
    this.setState({
      image1: true,
      image2: false,
      image3: false,
      image4: false
    })
  }

  image2() {
    console.log('clicked 2')
    this.setState({
      image1: false,
      image2: true,
      image3: false,
      image4: false
    })
  }

  image3() {
    console.log('clicked 3')
    this.setState({
      image1: false,
      image2: false,
      image3: true,
      image4: false
    })
  }

  image4() {
    console.log('clicked 4')
    this.setState({
      image1: false,
      image2: false,
      image3: false,
      image4: true
    })
  }

  render() {
    return (
      <Layout>
        <div className="works">
          <div className="content">
            <SEO title="Works" />
            <h2 className="title-h2">
              Kiyotaka Akaiwa
            </h2>
            <div className="works-content-1">
              <div className="images-stack">
                <a href="http://aritaclinic.s3-website-us-east-1.amazonaws.com/" target="blank">
                  <Image style={{zIndex: this.state.image1 ? "1" : "0"}} filename="aritaclinic1.png" alt="arita clinic picture 1" />
                  <Image style={{zIndex: this.state.image2 ? "1" : "0"}} filename="aritaclinic2.png" alt="arita clinic picture 1" />
                  <Image style={{zIndex: this.state.image3 ? "1" : "0"}} filename="aritaclinic3.png" alt="arita clinic picture 1" />
                  <Image style={{zIndex: this.state.image4 ? "1" : "0"}} filename="aritaclinic4.png" alt="arita clinic picture 1" />
                </a>
              </div>
              <h2 className="work-title">Dr. Arita<br />Pain Clinic</h2>
              <div className="slider-selector">
                <div className={this.state.image1 ? "vertical-line selected" : "vertical-line "} onMouseEnter={() => this.image1()}></div>
                <div className={this.state.image2 ? "vertical-line selected" : "vertical-line "} onMouseEnter={() => this.image2()}></div>
                <div className={this.state.image3 ? "vertical-line selected" : "vertical-line "} onMouseEnter={() => this.image3()}></div>
                <div className={this.state.image4 ? "vertical-line selected" : "vertical-line "} onMouseEnter={() => this.image4()}></div>
              </div>
            </div>
            <div className="works-content-2">
              <div className="works-content-2-left">
                <h2>
                  Contact now to
                </h2>
                <h2>
                  start a project with me
                </h2>
              </div>
              <div className="works-content-2-right">
                <h2>Contact</h2>
                <form action="https://getform.io/f/739b025a-e767-43dd-989d-3be034605c6c" method="POST">
                  <input type="text" name="name" placeholder="Name" />
                  <input type="email" name="email" placeholder="Email" />
                  <textarea name="message" placeholder="Message" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            <Footer />
          </div>
          <div className="nav-background">
            <div className="background-1"></div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default WorksPage
