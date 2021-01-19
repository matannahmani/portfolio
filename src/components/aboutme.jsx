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
    const [show, setShow] = useState(true);
    const [showskillbox, setShowskill] = useState(false);
    const [inquiry,setInquiry] = useState(undefined);
    useEffect(() => {
        setInquiry(document.querySelector('.inquiry'));
        window.addEventListener('scroll', (e) => {
            if (isScrolledIntoView(document.querySelector('.abouticon'),550)) setShow(true);
            if (isScrolledIntoView(document.querySelector('.whoami'),700)) setShowskill(true);
        },[]);
        if (isScrolledIntoView(document.querySelector('.whoami'),200)) setShowskill(true); // first load check if already in position
        if (show === true && flag[0] === false){
            // animateabout();
            // animateicons();
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
            const elements = document.querySelectorAll('.fill');
            const width = []
            elements.forEach((el) => {
                width.push(el.style.width);
                el.style.width = '0px';
            })
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
            setTimeout(() => {
                for (var i=0;i<elements.length;i++) {
                    ((ind) => {
                    setTimeout(() => {
                        anime({
                            targets: elements[ind],
                            width: [0,width[ind]],
                            duration: 500,
                            easing: 'linear'
                          });
                    }, 500 * ind);
                    })(i);
                 }
            }, 1000);
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
<span style={{color: '#3a86ff',fontWeight: 850,cursor: 'pointer'}} onClick={(typeof inquiry !== 'undefined') ? () => inquiry.scrollIntoView({ behavior: 'smooth', block: 'start'}): null}>Let's make something special.</span> </p>
                </div>
                <div className="myskills">
                    <Bar label="HTML5" fill={90}/>
                    <Bar label="CSS3" fill={85}/>
                    <Bar label="React" fill={80}/>
                    <Bar label="Context API" fill={80}/>
                    <Bar label="Redux" fill={40}/>
                    <Bar label="React Native" fill={40}/>
                    <Bar label="JavaScript" fill={85}/>
                    <Bar label="Ruby/Rails" fill={85}/>
                    <Bar label="NextJS" fill={80}/>
                    <Bar label="C#" fill={60}/>
                    <Bar label="PhaserJS" fill={50}/>
                    <Bar label="Photoshop" fill={40}/>

                </div>
            </div>
        </div>
    );
}

export default Aboutme;
