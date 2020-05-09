import React, {useEffect, useState} from 'react';
import anime from 'animejs';
import Card from './card';
let flag = false; // after anim shown trigger flag
let resize;
const Projects = () => {
    const [showanim, setShowanim] = useState(false);
    const [tab, setTab] = useState(0);
    useEffect(() => {
        const tabs = document.querySelectorAll('.tabs span');
        const floatbar = document.querySelector('.float-color');

        // event listener to check if visable
        window.addEventListener('scroll', (e) => {
            if (isScrolledIntoView(document.querySelector('.whoami'))) setShowanim(true);
        });
        // First load position floatbar to all + load animation
        if (isScrolledIntoView(document.querySelector('.whoami'))) setShowanim(true);
            if (showanim === true && flag === false){
                animateskills();
                floatbar.style.transition = 'none'; // hide transition if fast scroll
                floatbar.style.width = tabs[tab].clientWidth+'px';
                floatbar.style.left = tabs[tab].offsetLeft+'px';
                floatbar.style.transition = ''; // enable transition animation after fast scroll check
                flag = true;
        }
        // check for RESIZE
        window.addEventListener('resize', () => {
            // when resize no transition effect
            window.clearTimeout(resize);
            floatbar.style.width = tabs[tab].clientWidth+'px';
            floatbar.style.left = tabs[tab].offsetLeft+'px';
            floatbar.style.transition = 'none';
            resize = setTimeout(() => {
                // after resize done enable transition effect
                floatbar.style.transition = '';
            }, 66);
        });

        // handle floatbar
        tabs.forEach ((span) => {
            // span.style.color = 'black';
            span.addEventListener('click', (e) => {
            floatbar.style.width = e.target.clientWidth+'px';
            floatbar.style.left = e.target.offsetLeft+'px';
            tabs.forEach((tabb) => tabb.style.color = 'black');
            e.target.style.color = 'white';
            })});
    });
    const isScrolledIntoView = (el) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop <= 270) && (elemBottom <= window.innerHeight);
        return isVisible;
    }
    const animateskills = () => {
        anime({
            targets: '.project h3',
            translateX: 0,
            easing: 'linear',
            opacity: 1,
            translateX: [-100,0],
            duration: 1000
        });
    }
    return(
        <div className="project">
        <h3 className="section-t">Projects</h3>
            <div className="tabs">
                <div className="float-color"></div>
                <span onClick={() => setTab(0)}>ALL</span>
                <span onClick={() => setTab(1)}>REACT-JS</span>
                <span onClick={() => setTab(2)}>Ruby/Rails</span>
            </div>
            <div className="cardbox">
            <Card title="Last Resort" img="https://lh3.googleusercontent.com/akv2Bdp7i5Vv-sl9FuP3_dhWpUO80zULf-Pkh6RFleomEp6pZorHuCNm3FbR9oAMunVK" />
            </div>
        </div>
    )
}
export default Projects;