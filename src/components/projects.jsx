import React, {useEffect, useState} from 'react';
import anime from 'animejs';
import Card from './card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let flag = [false,false]; // after anim shown trigger flag
let resize;

const cards = [
    {code: ['r/r','js'], lang:"JS - React + Ruby/Rails", title:"Last Resort", img:"https://lh3.googleusercontent.com/akv2Bdp7i5Vv-sl9FuP3_dhWpUO80zULf-Pkh6RFleomEp6pZorHuCNm3FbR9oAMunVK" },
    {code: ['js'], lang:"JS - React + Gatsby", title:"Portfolio", img:"https://lh3.googleusercontent.com/akv2Bdp7i5Vv-sl9FuP3_dhWpUO80zULf-Pkh6RFleomEp6pZorHuCNm3FbR9oAMunVK" },
    {code: ['r/r'], lang:"Ruby/Rails", title:"Doublethefun", img:"https://lh3.googleusercontent.com/akv2Bdp7i5Vv-sl9FuP3_dhWpUO80zULf-Pkh6RFleomEp6pZorHuCNm3FbR9oAMunVK" },
    {code: ['r/r','js'], lang:"JS - React + Ruby/Rails", title:"Mixerz", img:"https://lh3.googleusercontent.com/akv2Bdp7i5Vv-sl9FuP3_dhWpUO80zULf-Pkh6RFleomEp6pZorHuCNm3FbR9oAMunVK" }
]
const Projects = () => {
    const [showanim, setShowanim] = useState(false);
    const [showanimcard, setShowanimcard] = useState(false);
    const [tab, setTab] = useState(0);
    useEffect(() => {
        const tabs = document.querySelectorAll('.tabs span');
        const floatbar = document.querySelector('.float-color');

        // event listener to check if visable
        window.addEventListener('scroll', (e) => {
            if (isScrolledIntoView(document.querySelector('.project'))) setShowanim(true);
            if (isScrolledIntoView(document.querySelector('.card'),450)) setShowanimcard(true);

        });
        // First load position floatbar to all + load animation
        if (isScrolledIntoView(document.querySelector('.project'))) setShowanim(true);
        if (isScrolledIntoView(document.querySelector('.card'),450)) setShowanimcard(true);
            if (showanim === true && flag[0] === false){
                animateskills();
                floatbar.style.transition = 'none'; // hide transition if fast scroll
                floatbar.style.width = tabs[tab].clientWidth+'px';
                floatbar.style.left = tabs[tab].offsetLeft+'px';
                floatbar.style.transition = ''; // enable transition animation after fast scroll check
                flag[0] = true;
                toast.info('Click on project to view details!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });
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
    const isScrolledIntoView = (el,range = 500) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop < range) && (elemBottom >= 0);
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
        anime({
            targets: '.project',
            opacity: 1
        })
        anime({
            targets: '.tabs',
            translateY: [-200,0],
            easing: 'linear',
            opacity: [0,1]
        })
    }
    let showncards;
    const cardout = () => {
        if ((typeof window !== 'undefined')){
        anime({
            targets: '.card',
            scale: [1,0],
            opacity: [1,0],
            easing: 'spring',
            duration: 400
        });}
    }
    const cardin = () => {
        anime({
            targets: '.card',
            scale: [0,1],
            opacity: [0,1],
            easing: 'spring',
            duration: 400
        });
    }
    switch (tab) {
        case 0:
            cardout(); // PLAY OUT ANIMATION
            showncards = cards.map((card) => <Card {...card}/>)
            setTimeout(() => cardin(), 400); // WAIT 400 MILS THEN PLAY IN ANIMATION
        break;
        case 1:
            cardout();
            showncards = cards.map( (card) => {
                if(card.code.includes('js'))
                    return <Card {...card}/>
                });
                setTimeout(() => cardin(), 400);
        break;
        case 2:
            cardout();
            showncards = cards.map( (card) => {
                if(card.code.includes('r/r'))
                    return <Card {...card}/>
                });
            setTimeout(() => cardin(), 400);
        }
    return(
        <div className="project">
        <h3 className="section-t">Projects</h3>
            <div className="tabs">
                <div className="float-color"></div>
                <span onClick={() => setTab(0)}>ALL</span>
                <span onClick={() => setTab(1)}>REACT</span>
                <span onClick={() => setTab(2)}>Ruby/Rails</span>
            </div>
            <div className="cardbox">
                <div className="card" style={{display: 'none'}}></div>
                {showncards}
             </div>
        </div>
    )
}
export default Projects;