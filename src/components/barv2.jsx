import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive'
const Bar = (props) => {
    return (
        <div>
            <MediaQuery minDeviceWidth={1100}>
                <div className="bar">
                    <h3 className="flex-c">{props.label}</h3>
                    <div style={{width: props.fill+'%'}}className="fill"></div>
                    <span>{props.fill}%</span>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1099}>
            <div className="bar">
                <h3 className="flex-c">{props.label}</h3>
                <div style={{width: props.fill*1.2+'%'}}className="fill"></div>
            </div>
            </MediaQuery>
        </div>
    )
}

export default Bar;