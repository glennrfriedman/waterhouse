import React, { Component } from 'react';
import SummaryCard from './SummaryCard';
import { Timeline } from 'antd';

class Landing extends Component {
  render() {
    return (
      <div style={{ margin: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Timeline>
          <Timeline.Item>step1 2015-09-01</Timeline.Item>
          <Timeline.Item>step2 2015-09-01</Timeline.Item>
          <Timeline.Item>step3 2015-09-01</Timeline.Item>
          <Timeline.Item>step4 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

export default Landing;
