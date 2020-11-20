import React, { useEffect,useState } from 'react'
import { toast } from 'react-toastify';
import anime from 'animejs';
const postMsg = () => {
    const inputs = document.querySelectorAll('.form input');
    let form = {inquire: {}};
    let flag = true;
    inputs.forEach ( (field) => {
        if (field.value.length > 3)form['inquire'][field.id] = field.value
        else {
            flag = false
            field.style.border = '1px solid red'
            setTimeout(() => {
                field.style.border = 'none'
            }, 2000);
        }
    })
    if (flag === true){
        // console.log(form);
        // const axios = require('axios');
        // axios.post('https://matan-portfolio-api.herokuapp.com/inquires', {
        // form
        // })
        toast.error('Disabled', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
            });
    }
}

const Inquiry = () =>{
    const [anim, setanim] = useState(false)
    useEffect(() =>{
        const form = document.querySelector('.form');
        window.onscroll = (el) => {
            console.log(anim);
            if (isScrolledIntoView(form) && anim === false){
                setanim(true)
                anime({
                    targets: '.inquiry h3',
                    opacity: [0,1],
                    translateX: [window.innerWidth,0],
                    easing: 'linear',
                    duration: 500
                })
                anime({
                    targets: '.inquiry span',
                    opacity: [0,1],
                    easing: 'linear',
                    duration: 500,
                })
                anime({
                    targets: form,
                    opacity: [0,1],
                    scale: [0,1],
                    easing: 'spring',
                    duration: 2500
                })
            }
        };
    });
    const isScrolledIntoView = (el,range = 550) => {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop < range) && (elemBottom >= 0);
        return isVisible;
    }
    return (
        <div className="inquiry">
            <svg viewBox="0 0 100 102" preserveAspectRatio="none" height="75" width="100">
                <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"/>
            </svg>
            <h3 className="section-t">Contact</h3>
            <span> Have a question or want to hire me?</span>
            <div className="form">
                <input type="text" id="name" placeholder="Name"/>
                <input type="text" id="email" placeholder="Email"/>
                <input style={{padding: "30px 15px"}}type="text" id="msg" placeholder="Your Message"/>
                <button onClick={()=> postMsg()} id="submit">Submit</button>
            </div>
        </div>
    )
}
export default Inquiry;