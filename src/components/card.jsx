import React, {useState, useEffect} from 'react';
import Cardpop from './cardpop';
import ReactAnime from 'react-animejs';
const {Anime, stagger} = ReactAnime;
const Card = (props) =>{
    const [show,showState] = useState(false);
    let modal;
    show ? modal = [<Cardpop img={props.img} unMount={() => showState(false)}/>, <div className="shadowbg" onClick={() => showState(false)}></div>] : modal = null
    return(
        <div className="parent">
            {/* <Anime
            initial={[
                {
                targets: ".cardpop",
                scale: 0.5,
                easing: "easeInOutSine",}]}>
                {modal}
            </Anime> */}
            {modal}
            <div  onClick={() => showState(true)} className="card">
            <img src={props.img} alt=""/>
            <span>{props.title}</span>
        </div>
        </div>
        
    )
}
export default Card;