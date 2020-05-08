import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typed from 'typed.js'
import Chart from "../components/skillsbox"
import Banner from '../components/headerv2';
import Bar from "../components/bar"
import Navbar from "../components/navbar"
import Aboutme from '../components/aboutme'

class Index extends Component{
  
  componentDidMount() {
  }
  
  render() {
    return(
      <Layout>
      <SEO title="Home" />
      <header>
      <Navbar right disableAutoFocus disableCloseOnEsc/>
      <Banner/>
      </header>
      <Aboutme/>
      
    </Layout>
    )
  }
}
export default Index