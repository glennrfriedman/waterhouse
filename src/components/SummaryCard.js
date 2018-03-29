import React, { Component } from 'react';
import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
  Card,
  Elevation
} from '@blueprintjs/core';
import SummaryTable from './SummaryTable';
import logo from '../images/Pwc-logo-880x660.png';

class SummaryCard extends Component {
  render() {
    const year = this.props.year;
    const desc = this.props.desc;
    const data = this.props.data[desc];
    return (
      <Card elevation="4" interactive="true" style={{ margin: '1%', width: '55%' }}>
        <h5>
          <a href="#">{year} Sample Co. R&D Tax Credit Study</a>
        </h5>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SummaryTable data={data} />
        </div>
      </Card>
    );
  }
}

export default SummaryCard;
