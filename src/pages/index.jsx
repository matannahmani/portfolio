import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from '../components/headerv2';
import Navbar from "../components/navbar";
import Aboutme from '../components/aboutme';
import Project from '../components/projects';
import Inquiry from '../components/inquiry';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            />
    </Layout>
    )
  }
}
export default Index
