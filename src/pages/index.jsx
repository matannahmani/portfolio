import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/headerv2';
import Navbar from "../components/navbar"
import Aboutme from '../components/aboutme'
import Project from '../components/projects'
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
      <Project/>
    </Layout>
    )
  }
}
export default Index