import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import Abouticon from './about-icon';
import { Icon, InlineIcon } from '@iconify/react';
import clockFast from '@iconify/icons-mdi/clock-fast';
import responsiveIcon from '@iconify/icons-mdi/responsive';
import mdLightBulb from '@iconify/icons-heroicons/md-light-bulb';
import rocketIcon from '@iconify/icons-vaadin/rocket';

const Aboutme = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (isScrolledIntoView(document.querySelector('.aboutme h3'))) setShow(true);
        });
        if (isScrolledIntoView(document.querySelector('.aboutme h3'))) setShow(true);
        if (show === true){
            animateabout();
            animateicons();
        }
    });
    const isScrolledIntoView = (el) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
    
        // Only completely visible elements return true:
        var isVisible = (elemTop >= 60) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }
    const animateabout = () => {
        anime({
            targets: '.aboutme h3',
            translateX: 0,
            easing: 'linear',
            opacity: 1
        });
    }
    const animateicons = () => {
        anime({
            targets: '.aboutp',
            scale: [
                {value: 0.9, easing: 'easeOutSine', duration: 500},
                {value: 1, easing: 'easeInOutQuad', duration: 1200}
              ],
              opacity: 1,
            duration: 4000,
            // easing: 'easeOutElastic(1, .8)',
          });
    }
    return (
        <div className="aboutme">
            <h3 style={{textAlign: 'center'}}>About</h3>
            <div className="details">
                <Abouticon icon={<Icon icon={clockFast} />} label="Fast" text='Fast load times and lag free interaction, my highest priority. '/>
                <Abouticon icon={<Icon icon={responsiveIcon} />} label="Responsive" text='My layouts will work on any device, big or small.'/>
                <Abouticon icon={<Icon icon={mdLightBulb} />} label="Intuitive" text='Strong preference for easy to use, intuitive UX/UI.'/>
                <Abouticon icon={<Icon icon={rocketIcon} />} label="Dynamic" text="Websites don't have to be static, I love making pages come to life. "/>
            </div>
        </div>
    );
}

export default Aboutme;