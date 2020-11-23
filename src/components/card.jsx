import React, {useState, useEffect} from 'react';
import Cardpop from './cardpop';
let flag = true;
const Card = (props) =>{
    const [show,showState] = useState(false);
    const [hover,hoverState] = useState(false);
    let modal,showcard;
    const card = [
        <div  onClick={() => showState(true)} className="card">
        <img src={props.img[0]} alt={`project ${props.title} image`}/>
        <span>{props.title}</span>
        </div>
    ]
    if ((typeof window !== 'undefined')){
        if (window.innerWidth > 301) // if before load screen is bigger then 300 width allow modal
            show ? modal = [<Cardpop site={props.url} img={props.img} name={props.title} done={props.lang} descp={props.descp} unMount={() => showState(false)}/>, <div className="shadowbg" onClick={() => showState(false)}></div>] : modal = null
        window.onresize = () => { // check if after resize screen is still bigger
        if (window.innerWidth > 301)
            show ? modal = [<Cardpop site={props.url} img={props.img} name={props.title} done={props.lang} descp={props.descp} unMount={() => showState(false)}/>, <div className="shadowbg" onClick={() => showState(false)}></div>] : modal = null
        }
    }
    return(
        <div className="card-parent">
            {modal}
            {card}
        </div>

    )
}
export default Card;
