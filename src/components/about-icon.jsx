import React from 'react'

const icon = (props) => (
    <div className="aboutp">
        <div className="abouticon">
        {props.icon}
        </div>
        <h2>{props.label}</h2>
        <p>{props.text}</p>
    </div>
);
export default icon;