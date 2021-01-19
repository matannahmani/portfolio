import  React from 'react';
import Loadable from '@loadable/component';
const ParticlesBg = Loadable(() => import('particles-bg'));
const Header = () => {
    return (
            <div className="banner">
                <ParticlesBg num={20} type="lines" bg={true} />
                <h1>Hello, I'm <span style={{display: 'inline', color: 'pink'}}>Matan Nahmani</span><br/>I'm a full-stack web developer.</h1>
            </div>
    );
  }

export default Header;
