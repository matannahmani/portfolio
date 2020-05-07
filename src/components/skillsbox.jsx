import React from 'react'
import { Fade, AutoPlay, Parallax } from "@egjs/flicking-plugins";
import Chart from "../components/skills"
import Flicking from "@egjs/react-flicking";


const skillsbox = () => {
    const plugs = [new Fade(),new AutoPlay(2000, "NEXT")];
    return(
        <div className="skillbox">
        <h2 style={{marginTop: '24px',textAlign: 'center',fontSize: '28px'}}>
            My Overall skills
        </h2>
        <Flicking
            className="flicking flicking0"
            circular={true}
            gap={8}
            duration={500}
            plugins={plugs}
            moveType = {{type: "snap", count: 1}}
        >
            
        <div className="panel">
            <Chart fill={70} label="Front End"/>
        </div>
        <div className="panel">
            <Chart fill={80} label="Back End"/>
        </div>
        <div className="panel">
            <Chart fill={80} label="Thinking"/>
        </div>
        <div className="panel">
            <Chart fill={60} label="Leadership"/>
        </div>
      </Flicking>
      </div>
    )
}
export default skillsbox;