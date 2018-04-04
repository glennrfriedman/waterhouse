import React, { Component } from 'react';
import { Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import logo from '../images/Pwc-logo-880x660.png';

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <NavbarGroup align={'left'}>
          <NavbarHeading src={logo}>
            <img style={{ height: '65px' }} src={logo} alt="logo" />
          </NavbarHeading>
          <NavbarDivider />
          <Link to="/">
            <Button id="home" className="pt-minimal" icon="home" text="Home" />
          </Link>
          <Link to="/qre">
            <Button id="qre" className="pt-minimal" icon="chart" text="QRE" />
          </Link>
          <Button id="forms" className="pt-minimal" icon="saved" text="8949" />
          <Button id="org" className="pt-minimal" icon="mugshot" text="Organization" />
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default Nav;
