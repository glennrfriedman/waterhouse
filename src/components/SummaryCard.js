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
import logo from '../images/Pwc-logo-880x660.png';

class SummaryCard extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', margin: '2%' }}>
        <Card elevation="4" interactive="true" style={{ margin: '1%' }}>
          <h5>
            <a href="#">{this.props.year} Sample Co. R&D Tax Credit Study</a>
          </h5>
          <Button className="pt-minimal" icon="document" text="View" />
        </Card>
      </div>
    );
  }
}

export default SummaryCard;
