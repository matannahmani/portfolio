import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { Link } from "gatsby"

class Navbar extends Component{
    state = {
        menuOpen: false,
        about: undefined
      }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  closeMenu () {
    this.setState({menuOpen: false})
  }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({about: {about: document.querySelector('.aboutme'),
        project: document.querySelector('.project'),
        contact: document.querySelector('.inquiry')
      }});
    }
    isScrolling;
    handleScroll() {
        const nav = document.querySelector('.mynav');
        const button = document.querySelector('.bm-burger-button');
        const burgericon = document.querySelectorAll('.bm-burger-bars');
        const bmwrap = document.querySelector('.bm-menu-wrap');
        if (document.documentElement.scrollTop < 520){
            nav.style.position = 'absolute';
            nav.style.height = "100%";
            nav.style.width = "100%";
            button.style.position = 'absolute';
            button.style.bottom = '36px';
            button.style.top = '';
            burgericon.forEach ((icon) => icon.style.background = 'white');
        }
        else{
            nav.style.position = 'fixed';
            button.style.position = 'fixed';
            button.style.top = '36px';
            window.clearTimeout( this.isScrolling );
            // hide navbar
            nav.classList.add('hide');
            nav.style.height = "0%";
            nav.style.width = "0%";
            button.style.opacity = 0;
            // Set a timeout to run after scrolling ends
            const isScrolledIntoView = (el) => {
              var rect = el.getBoundingClientRect();
              var elemTop = rect.top;
              var elemBottom = rect.bottom;
          
              // Only completely visible elements return true:
              var isVisible = (elemTop < 20) && (elemBottom >= 0);
              // Partially visible elements return true:
              //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
              return isVisible;
          }
            this.isScrolling = setTimeout(() => {
                // show navbar after display ends
                nav.classList.remove('hide');
                button.style.opacity = 0.99;
                if (isScrolledIntoView(document.querySelector('.inquiry')))
                burgericon.forEach ((icon) => icon.style.background = 'white');
                else
                burgericon.forEach ((icon) => icon.style.background = 'black');
            }, 66);
        }
    }
      render () {
        return (
            <div className="mynav">
            <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <h3 className="btn" onClick={() => {this.closeMenu(); this.state.about.about.scrollIntoView({ behavior: 'smooth', block: 'start'});}} >Home</h3>
                <h3 className="btn" onClick={() => {this.closeMenu();this.state.about.project.scrollIntoView({ behavior: 'smooth', block: 'start'});}}>Projects</h3>
                <h3 className="btn" onClick={() => {this.closeMenu();this.state.about.contact.scrollIntoView({ behavior: 'smooth', block: 'start'});}}>Contact</h3>
            </Menu>
          </div>
        );
      }
}
export default Navbar;