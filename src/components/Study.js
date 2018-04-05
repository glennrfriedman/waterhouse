import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Card, Callout, Tooltip } from '@blueprintjs/core';
import { Timeline } from 'antd';

class Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      year: this.props.routeProps.location.state.year,
      desc: this.props.routeProps
    };
  }

  render() {
    return (
      <div>
        <h3 style={{ margin: '2%' }}>{this.state.year} R&D Tax Credit Study</h3>
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

export default Study;
