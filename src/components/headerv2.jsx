// import Anime from "@mollycule/react-anime";
import  React from 'react';
// import ParticlesBg from 'particles-bg'
import Loadable from "@loadable/component"
const Anime = Loadable(() => import('@mollycule/react-anime'))
const ParticlesBg = Loadable(() => import('particles-bg'));
const Header = () => {
    return (
        <Anime
          in
          appear
          duration={500}
          onEntering={{ translateY: [-20, 0], opacity: [0, 1] }}
          onExiting={{ translateY: -20, opacity: 0 }}
          easing="easeOutCubic"
        >
            <div className="banner">
                <h1>Hello, I'm <span style={{display: 'inline', color: 'pink'}}>Matan Nahmani</span><br/>I'm a full-stack web developer.</h1>
            <ParticlesBg color="#ff0000" num={100} type="cobweb" bg={true} />
            </div>
        </Anime>
    );
  }

export default Header;
