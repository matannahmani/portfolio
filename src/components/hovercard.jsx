import React,{useEffect} from 'react'
import anime from 'animejs';
const Hovercard = (props) =>{
    useEffect(() => {
        anime({
            targets: '.hovercard',
            easing: 'easeInCirc',
            opacity: [0,1],
            duration: 400    });
        anime({
            targets: ['.hover-title','.hover-lang'],
            easing: 'easeInCirc',
            translateY: [-100,0],
            duration: 400,
        });
        anime({
            targets: '.hover-learn',
            easing: 'easeInCirc',
            translateY: [-200,0],
            direction: 'normal',
            duration: 400
        });
        return () => {
            anime({
                targets: '.hovercard',
                easing: 'easeInCirc',
                opacity: [1,0],
                duration: 400    });
        }
    },);

    return(
        <div className="hovercard">
                <span className="hover-title">{props.title}</span>
                <span className="hover-lang">{props.lang}</span>
            <span className="hover-learn">Learn More</span>
        </div>
    )
}
export default Hovercard;