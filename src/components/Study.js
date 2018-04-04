import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Callout, Tooltip } from '@blueprintjs/core';

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
    console.log(this.props.routeProps.location);
    return <div>Study for {this.state.year}</div>;
  }
}

export default Study;
