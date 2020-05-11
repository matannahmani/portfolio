import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import Abouticon from './about-icon';
import { Icon, InlineIcon } from '@iconify/react';
import clockFast from '@iconify/icons-mdi/clock-fast';
import responsiveIcon from '@iconify/icons-mdi/responsive';
import mdLightBulb from '@iconify/icons-heroicons/md-light-bulb';
import rocketIcon from '@iconify/icons-vaadin/rocket';
import Bar from './barv2';
let flag = [false,false]; // after anim shown trigger flag
const Aboutme = () => {
    const [show, setShow] = useState(false);
    const [showskillbox, setShowskill] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (isScrolledIntoView(document.querySelector('.aboutme h3'),600)) setShow(true);
            if (isScrolledIntoView(document.querySelector('.whoami'),500)) setShowskill(true);

        });
        if (isScrolledIntoView(document.querySelector('.aboutme h3'),600)) setShow(true); // first load check
        if (isScrolledIntoView(document.querySelector('.whoami'),500)) setShowskill(true); // first load check if already in position
        if (show === true && flag[0] === false){
            animateabout();
            animateicons();
            flag[0] = true;
        }
        if (showskillbox && flag[1] === false){
            animateskills();
            flag[1] = true;
        } 
    });
    const isScrolledIntoView = (el,range = 270) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
    
        // Only completely visible elements return true:
        var isVisible = (elemTop < range) && (elemBottom >= 0);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }
    const animateabout = () => {
        anime({
            targets: '.aboutme h3',
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
        const animateskills = () => {
            anime({
                targets: '.whoami',
                opacity: 1
            })
            anime({
                targets: '.me',
                translateX: [-500,0],
                easing: 'linear',
                duration: 500
            });
            anime({
                targets: '.myskills',
                translateX: [0,500],
                easing: 'linear',
                duration: 500,
                direction: 'reverse'
            });
    }
    return (
        <div className="aboutme">
            <h3 className="section-t">About</h3>
            <div className="details">
                <Abouticon icon={<Icon icon={clockFast} />} label="Fast" text='Fast load times and lag free interaction, my highest priority. '/>
                <Abouticon icon={<Icon icon={responsiveIcon} />} label="Responsive" text='My layouts will work on any device, big or small.'/>
                <Abouticon icon={<Icon icon={mdLightBulb} />} label="Intuitive" text='Strong preference for easy to use, intuitive UX/UI.'/>
                <Abouticon icon={<Icon icon={rocketIcon} />} label="Dynamic" text="Websites don't have to be static, I love making pages come to life. "/>
            </div>
            <div className="whoami">
                <div className="me">
                <img src="https://res.cloudinary.com/ddqtnp0ic/image/upload/v1588912419/oooo.plus_91_s88bs4.png" alt=""/>
                <h3>Who's this guy?</h3>
                <p>
I'm a Full-Stack Developer from Eilat in Israel.<br/>
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.<br/>
Let's make something special. </p>
                </div>
                <div className="myskills">
                    <Bar label="HTML" fill={80}/>
                    <Bar label="CSS" fill={70}/>
                    <Bar label="React" fill={65}/>
                    <Bar label="React Native" fill={35}/>
                    <Bar label="JavaScript" fill={70}/>
                    <Bar label="Ruby/Rails" fill={70}/>
                    <Bar label="C#" fill={100}/>
                    <Bar label="PhaserJS" fill={50}/>
                    <Bar label="Photoshop" fill={30}/>

                </div>
            </div>
        </div>
    );
}

export default Aboutme;