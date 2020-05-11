import React, {useState, useEffect} from 'react';
import Cardpop from './cardpop';
import Hovercard from './hovercard';
import anime from 'animejs';
const lastresort = {name: 'Last Resort',done: '2020.02.27-2020.03.05',descp: 'Last Resort is a mobile geolocation game inspired by Pokemon go and Clash of clans, explore grow conqure!'}
let flag = true;
const Card = (props) =>{
    const [show,showState] = useState(false);
    const [hover,hoverState] = useState(false);
    let modal,showcard;
    const card = [
        <div  onClick={() => showState(true)} className="card">
        <img src={props.img} alt=""/>
        <span>{props.title}</span>
        </div>
    ]
    show ? modal = [<Cardpop site="http://lastresort.pw" img={props.img} name={lastresort.name} done={lastresort.done} descp={lastresort.descp} unMount={() => showState(false)}/>, <div className="shadowbg" onClick={() => showState(false)}></div>] : modal = null
    // hover ? showcard = <Hovercard {...props}/> : showcard = card;   
    // useEffect(() => {
    //     const parentcard = document.querySelector('.card-parent');
    //     parentcard.addEventListener('mouseover', () => hoverState(true));
    //     parentcard.addEventListener('mouseout', () => hoverState(false));
    // });
    return(
        <div className="card-parent">
            {modal}
            {card}
        </div>
        
    )
}
export default Card;