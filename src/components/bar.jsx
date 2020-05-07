import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
class Bar extends Component{
    state = {
        fill: this.props.fill
    };
    mouseCheck(e) {
        if (e.target.children.length > 0)
            if (e.target.children[1].style.width !== '80px'){
                e.target.children[1].style.width = this.state.fill*2 + 80 + 'px';
            }
            else{
                e.target.children[1].style.width = '80px';
            }
    }
    componentDidMount() {
        const handler = e => this.setState({mobile: true});
        window.matchMedia("(min-width: 768px)").addListener(handler);
      }
    render() {
        return (
            <div>
            <MediaQuery minDeviceWidth={1224}>
            <div className="barbox" onClick={(e) => this.mouseCheck(e)} onMouseEnter={(e) => this.mouseCheck(e)} onMouseLeave={(e) => this.mouseCheck(e)}>
                <h3>{this.props.label}</h3>
                <div className="bar">{this.props.fill}</div>
            </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
            <div className="barbox">
                <h3>{this.props.label}</h3>
                <div className="bar" style={{width: this.props.fill*2+80+'px'}}>{this.props.fill}</div>
            </div> 
            </MediaQuery>
            </div>
        )
    }
}

export default Bar;