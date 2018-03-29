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
import logo from './images/Pwc-logo-880x660.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarGroup align={'left'}>
            <NavbarHeading src={logo}>
              <img style={{ height: '60px', padding: '2%' }} src={logo} alt="logo" />
            </NavbarHeading>
            <NavbarDivider />
            <Button className="pt-minimal" icon="home" text="Home" />
            <Button className="pt-minimal" icon="document" text="Files" />
          </NavbarGroup>
        </Navbar>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '2%' }}>
          <Card elevation="4" interactive="true" style={{ margin: '1%' }}>
            <h5>
              <a href="#">2018 Sample Co. R&D Tax Credit Study</a>
            </h5>
            <Button className="pt-minimal" icon="document" text="See study" />
          </Card>
          <Card elevation="4" interactive="true" style={{ margin: '1%' }}>
            <h5>
              <a href="#">2018 Sample Co. R&D Tax Credit Study</a>
            </h5>
            <Button className="pt-minimal" icon="document" text="See study" />
          </Card>
          <Card elevation="4" interactive="true" style={{ margin: '1%' }}>
            <h5>
              <a href="#">2018 Sample Co. R&D Tax Credit Study</a>
            </h5>
            <Button className="pt-minimal" icon="document" text="See study" />
          </Card>
          <Card elevation="4" interactive="true" style={{ margin: '1%' }}>
            <h5>
              <a href="#">2018 Sample Co. R&D Tax Credit Study</a>
            </h5>
            <Button className="pt-minimal" icon="document" text="See study" />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
