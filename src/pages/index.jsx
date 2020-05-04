import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typed from 'typed.js'
import Chart from "../components/skillsbox"

class Index extends Component{
  
  componentDidMount() {
    const txt = new Typed('#typed', {
      strings: ['I am <strong>Creator</strong>', 'I am <strong>enthuist</strong>', 'I am <strong>Full-Stack Developer</strong>'],
      typeSpeed: 25,
      backSpeed: 25,
      smartBackspace: true, // this is a default
      loop: true
    });
  }
  
  render() {
    return(
      <Layout>
      <SEO title="Home" />
        <div className="banner">
          <div className="img"></div>
          <div id="text">
            <p id="typed"></p>
            </div>
        </div>
        <Chart/>
    </Layout>
    )
  }
}
export default Index