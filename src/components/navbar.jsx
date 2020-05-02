import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { Link } from "gatsby"

class Navbar extends Component{
    state = {
        menuOpen: false
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
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillMount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    isScrolling;
    handleScroll() {
        const nav = document.querySelector('.mynav');
        const button = document.querySelector('.bm-burger-button');
        if (document.documentElement.scrollTop < 45){
            nav.style.position = 'absolute';
            button.style.position = 'absolute';
        }
        else{
            nav.style.position = 'fixed';
            button.style.position = 'fixed';
            window.clearTimeout( this.isScrolling );
            // hide navbar
            nav.classList.add('hide');
            button.style.opacity = 0;
            // Set a timeout to run after scrolling ends
            this.isScrolling = setTimeout(function() {
                // show navbar after display ends
                nav.classList.remove('hide');
                button.style.opacity = 1;
            }, 66);
        }
    }
      render () {
        return (
            <div className="mynav">
            <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <Link onClick={() => this.closeMenu()} to='/'><h3>Home</h3></Link>
                <Link onClick={() => this.closeMenu()} to='/projects'><h3>Projects</h3></Link>
                <Link onClick={() => this.closeMenu()} to='/contact'><h3>Contact</h3></Link>
            </Menu>
          </div>
        );
      }
}
export default Navbar;