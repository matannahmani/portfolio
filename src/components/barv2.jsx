import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive'
import anime from 'animejs'
const Bar = (props) => {
    const [showanim, setShowanim] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (isScrolledIntoView(document.querySelector('.aboutp p'))) setShowanim(true);
        });
        if (isScrolledIntoView(document.querySelector('.aboutp p'))) setShowanim(true);
        if (showanim === true){
            animateskills();
        }
    });
    const isScrolledIntoView = (el) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
    
        // Only completely visible elements return true:
        var isVisible = (elemTop <= 270) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        // isVisible = elemTop < window.innerHeight && elemBottom >= -100;
        return isVisible;
    }
    const animateskills = () => {
        anime({
            targets: '.whoami',
            translateX: 0,
            easing: 'linear',
            opacity: 1,
            translateX: [-100,0]
        });
    }
    return (
        <div>
            <MediaQuery minDeviceWidth={1100}>
                <div className="bar">
                    <h3 className="flex-c">{props.label}</h3>
                    <div style={{width: props.fill+'%'}}className="fill"></div>
                    <span>{props.fill}%</span>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1099}>
            <div className="bar">
                <h3 className="flex-c">{props.label}</h3>
                <div style={{width: props.fill*1.2+'%'}}className="fill"></div>
            </div>
            </MediaQuery>
        </div>
    )
}

export default Bar;