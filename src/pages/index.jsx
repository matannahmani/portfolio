import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from '../components/headerv2';
import Navbar from "../components/navbar";
import Aboutme from '../components/aboutme';
import Project from '../components/projects';
import Inquiry from '../components/inquiry';
class Index extends Component{
  
  componentDidMount() {
  }
  
  render() {
    return(
      <Layout>
      <SEO title="Matan Nahmani" />
      <header>
      <Navbar right disableAutoFocus disableCloseOnEsc/>
      <Banner/>
      </header>
      <Aboutme/>
      <Project/>
      <Inquiry/>
    </Layout>
    )
  }
}
export default Index