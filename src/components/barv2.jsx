import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive'
const Bar = (props) => {
    return (
        <div>
            <MediaQuery minDeviceWidth={1100}>
                <div className="bar">
                    <div style={{width: `calc((100% - 137px) * ${props.fill / 100.0} + 137px)`}}className="fill"></div>
                    <h3 className="flex-c">{props.label}</h3>
                    <span>{props.fill}%</span>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1099}>
            <div className="bar">
                <div style={{width: `calc((100% - 99px) * ${props.fill / 100.0} + 99px)`}}className="fill"></div>
                <h3 className="flex-c">{props.label}</h3>
                <span>{props.fill}%</span>
            </div>
            </MediaQuery>
        </div>
    )
}

export default Bar;
