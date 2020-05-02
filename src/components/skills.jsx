import React, { Component } from "react";
import Chart from "react-apexcharts";
class Radchart extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {
      
        series: [props.fill],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: [props.label],
        },
      
      
      };
    }


    render() {
      return (
  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
</div>
      )
    };
}

export default Radchart;