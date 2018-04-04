import React, { Component } from 'react';
import SummaryCard from './SummaryCard';

class Landing extends Component {
  render() {
    return (
      <div style={{ margin: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SummaryCard year="2018" desc="current" data={this.props.data} intent="warning" />
        <SummaryCard year="2017" desc="prior" data={this.props.data} intent="success" />
        <SummaryCard year="2016" desc="prior2" data={this.props.data} intent="success" />
        <SummaryCard year="2015" desc="prior3" data={this.props.data} intent="success" />
      </div>
    );
  }
}

export default Landing;
